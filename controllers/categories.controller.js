const categoriesService = require('../services/categories.service');

module.exports.create = async (req, res) => {
  const { statusCode, payload } = await categoriesService.create(req.body);
  res.status(statusCode).json(payload);
};

module.exports.getAll = async (req, res) => {
  const { statusCode, payload } = await categoriesService.getAll(req.body);
  res.status(statusCode).json(payload);
};

module.exports.getTree = async (req, res) => {
  const { statusCode, payload } = await categoriesService.getTree(req.body);
  res.status(statusCode).json(payload);
};

module.exports.update = async (req, res) => {
  const { statusCode, payload } = await categoriesService.update(
    req.body,
    req.params.id
  );
  res.status(statusCode).json(payload);
};

module.exports.delete = async (req, res) => {
  const { statusCode, payload } = await categoriesService.delete(req.params.id);
  res.status(statusCode).json(payload);
};
