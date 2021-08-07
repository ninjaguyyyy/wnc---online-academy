const CoursesResponses = {
  postFeedbackFailStudentNotExist() {
    return {
      statusCode: 200,
      payload: {
        msg: 'This student is not register to course',
      },
    };
  },
};

module.exports = CoursesResponses;
