var ObjectId = require('mongoose').Types.ObjectId;
const Course = require('../course.model');

const CourseFactory = {
  findAll({ categories }) {
    const filter = {};
    categories && (filter.category = { $in: categories });
    return Course.find(filter)
      .populate('appliedPromotions')
      .populate('category')
      .populate('lecturer')
      .populate('promotion')
      .lean()
      .exec();
  },
  findById(id) {
    if (!ObjectId.isValid(id)) {
      return false;
    }
    return Course.findOne({ _id: id })
      .populate('appliedPromotions')
      .populate('category')
      .populate('lecturer')
      .populate('promotion')
      .lean()
      .exec();
  },
};

module.exports = CourseFactory;
