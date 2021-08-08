const CoursesResponses = {
  postFeedbackFailStudentNotExist() {
    return {
      statusCode: 200,
      payload: {
        success: false,
        msg: 'Student is not register to course',
      },
    };
  },
};

module.exports = CoursesResponses;
