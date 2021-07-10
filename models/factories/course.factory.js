const Course = require('../course.model');

const CourseFactory = {
  findAll() {
    return Course.find({});
  },
  findById(id) {
    return Course.findOne({ _id: id }).exec();
  },
};

module.exports = CourseFactory;
