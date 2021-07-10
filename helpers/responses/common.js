const CommonResponses = {
  getFailIdNotValid() {
    return {
      statusCode: 400,
      payload: {
        msg: 'Id is not valid',
      },
    };
  },
};

module.exports = CommonResponses;
