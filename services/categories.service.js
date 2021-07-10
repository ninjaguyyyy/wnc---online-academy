const Category = require('../models/category.model');

module.exports.create = async ({ name, parent }) => {
  console.log(name, parent);
  // validate name, parent

  const category = await Category.create({ name, parent });

  return { statusCode: 200, payload: { success: true, category } };
};

module.exports.getAllTree = async () => {
  const categories = await Category.findOne({
    _id: '60e16888bed7e330585c1df5',
  });
  // db.categories.findOne( { _id: "MongoDB" } ).parent

  return { statusCode: 200, payload: { success: true, categories } };
};
