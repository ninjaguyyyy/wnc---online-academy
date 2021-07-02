const coursesService = require('../services/courses.service');

module.exports.upload = async (req, res) => {
  const { statusCode, payload } = await coursesService.upload();
  res.status(statusCode).json(payload);
};
