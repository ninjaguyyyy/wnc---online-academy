const CommonResponses = {
  getFailIdNotValid() {
    return {
      statusCode: 400,
      payload: {
        msg: 'Id is not valid',
      },
    };
  },
  postSuccess() {
    return {
      statusCode: 201,
      payload: {
        success: true,
      },
    };
  },
  success() {
    return {
      statusCode: 200,
      payload: {
        success: true,
      },
    };
  },
};

module.exports = CommonResponses;
