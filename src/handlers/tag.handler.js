const db = require('../psql/models');

const handleUpdateRemoveResult = (result) => (Array.isArray(result) && result[0] > 0 || result > 0)
    ? { success: true } : { success: false };

const create = async (data) => {
  const transaction = await db.sequelize.transaction();

  try {
    const { name, userId, videoId } = data;

    const tag = await db.tag.create({ name, userId }, { transaction });
    const video = await db.video.findOne({ where: { id: videoId } });

    if (!video) throw { message: 'This video not found', status: 400 };

    await db.video_tag.create({ videoId, tagId: tag.id }, { transaction });

    await transaction.commit();

    return tag;
  } catch (err) {
    await transaction.rollback();
    throw err;
  }
};

const update = async (data) => {
  try {
    const { id, name, userId } = data;

    const tag = await db.tag.findOne({ where: { id, userId } });

    if (!tag) throw {
      message: 'Tag not found or you is not owner of this tag',
      status: 400,
    };

    const result = await db.tag.update({ name }, { where: { id } });
    return handleUpdateRemoveResult(result);
  } catch (err) {
    throw err;
  }
};

const remove = async (data) => {
  try {
    const { id, userId } = data;

    const tag = await db.tag.findOne({ where: { id, userId } });

    if (!tag) throw {
      message: 'Tag not found or you is not owner of this tag',
      status: 400,
    };

    const result = await db.tag.destroy({ where: { id } });

    return handleUpdateRemoveResult(result);
  } catch (err) {
    throw err;
  }
};

module.exports = {
  create,
  update,
  remove,
};
