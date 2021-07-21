var ObjectId = require('mongoose').Types.ObjectId;
const Course = require('../course.model');

const CourseFactory = {
  findAll() {
    return Course.find({})
      .populate('appliedPromotions')
      .populate('category')
      .populate('lecturer')
      .exec();
  },
  findById(id) {
    if (!ObjectId.isValid(id)) {
      return false;
    }
    return Course.findOne({ _id: id }).exec();
  },
};

module.exports = CourseFactory;
