const Category = require('../category.model');
var ObjectId = require('mongoose').Types.ObjectId;

const CategoryFactory = {
  findAll() {
    return Category.find({});
  },
  findById(id) {
    if (!ObjectId.isValid(id)) {
      return false;
    }

    return Category.findOne({ _id: id }).lean().exec();
  },
  findByIds(ids) {
    return Category.find({
      _id: { $in: ids },
    }).exec();
  },
};

module.exports = CategoryFactory;
