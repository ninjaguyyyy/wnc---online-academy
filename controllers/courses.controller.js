const coursesService = require('../services/courses.service');

module.exports.create = async (req, res) => {
  const { statusCode, payload } = await coursesService.create();
  res.status(statusCode).json(payload);
};
