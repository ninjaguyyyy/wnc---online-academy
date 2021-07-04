const Category = require('../models/category.model');

module.exports.create = async ({ name, path }) => {
  console.log(name, path);
  // validate name, path

  const category = await Category.create({ name, path });

  return { statusCode: 200, payload: { success: true, category } };
};

module.exports.getAllTree = async () => {
  const categories = await Category.find().sort({ path: 1 });

  return { statusCode: 200, payload: { success: true, categories } };
};
