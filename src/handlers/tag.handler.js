const db = require('../psql/models');

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

module.exports = {
  create,
};
