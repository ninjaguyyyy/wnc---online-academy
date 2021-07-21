const CoursesResponses = {
  postFeedbackFailStudentNotExist() {
    return {
      statusCode: 400,
      payload: {
        msg: 'This student is not register to course',
      },
    };
  },
};

module.exports = CoursesResponses;
