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
  addFeedback(courseId, feedback, rating) {
    return Course.findByIdAndUpdate(
      courseId,
      { $push: { feedbacks: feedback }, rating },
      { new: true }
    )
      .populate('feedbacks.student')
      .exec();
  },
};

module.exports = CourseRepository;
