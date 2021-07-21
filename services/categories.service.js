const Category = require('../models/category.model');

module.exports.create = async ({ name, parent }) => {
  const category = await Category.create({ name, parent });
  if (parent) {
    await Category.findByIdAndUpdate(parent, {
      $push: { child: category._id },
    }).exec();
  }
  return { statusCode: 200, payload: { success: true, category } };
};

module.exports.update = async ({ name }, id) => {
  const category = await Category.findByIdAndUpdate(
    id,
    { name },
    { new: true }
  ).lean();

  return { statusCode: 200, payload: { success: true, category } };
};

module.exports.getAll = async () => {
  const categories = await Category.find({})
    .lean()
    .populate('parent')
    .populate('child');
  return { statusCode: 200, payload: { success: true, categories } };
};

module.exports.getTree = async () => {
  const categories = await Category.find({})
    .lean()
    .populate('parent')
    .populate('child');

  return {
    statusCode: 200,
    payload: {
      success: true,
      categories: categories.filter((category) => !category.parent),
    },
  };
};
