const coursesService = require('../services/courses.service');

module.exports.create = async (req, res) => {
  const { statusCode, payload } = await coursesService.create(
    req.user,
    req.body,
    req.file
  );
  res.status(statusCode).json(payload);
};
