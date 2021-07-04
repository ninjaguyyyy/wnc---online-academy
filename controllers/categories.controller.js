const categoriesService = require('../services/categories.service');

module.exports.create = async (req, res) => {
  const { statusCode, payload } = await categoriesService.create(req.body);
  res.status(statusCode).json(payload);
};

module.exports.getAllTree = async (req, res) => {
  const { statusCode, payload } = await categoriesService.getAllTree(req.body);
  res.status(statusCode).json(payload);
};
