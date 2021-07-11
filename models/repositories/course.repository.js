const Course = require('../course.model');

const CourseRepository = {
  insertOne: (course) => {
    return Course.create(course);
  },

  addStudentToCourse(courseId, userId) {
    return Course.findByIdAndUpdate(
      courseId,
      { $push: { students: userId } },
      { new: true }
    ).exec();
  },
};

module.exports = CourseRepository;
