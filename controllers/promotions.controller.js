const promotionsService = require('../services/promotions.service');

module.exports.create = async (req, res) => {
  const { statusCode, payload } = await promotionsService.create(req.body);
  res.status(statusCode).json(payload);
};
