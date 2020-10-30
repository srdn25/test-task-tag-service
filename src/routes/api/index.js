const tagHandler = require('../../handlers/tag.handler');

module.exports = (router) => {
  router.get('/', (req, res) => {
    res.json({ message: 'Welcome to API' });
  });

  router.post('/tags', async (req, res, next) => {
    // TODO: in auth take userId from header auth token
    const { name, userId, videoId } = req.body;

    if (!name || !userId || !videoId) {
      next({
        message: 'name, userId, videoId is required',
        status: 400
      });
    }

    try {
      const result = await tagHandler.create({name, userId, videoId});
      res.json(result);
    } catch (err) {
      next(err);
    }
  });
};
