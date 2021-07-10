const Course = require('../course.model');

const CourseRepository = {
  insertOne: (course) => {
    return Course.create(course);
  },
};

module.exports = CourseRepository;
