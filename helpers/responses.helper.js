const {
  REGISTER_ALREADY_USERNAME,
  LOGIN_FAIL_PASSWORD,
  LOGIN_FAIL_ROLE,
  LOGIN_FAIL_USERNAME,
  REGISTER_ALREADY_EMAIL,
  USER_NOT_YET_ACTIVATED,
  EMAIL_IS_NOT_EXIST,
  OTP_IS_NOT_CORRECT,
  OTP_IS_EXPIRED,
} = require('../constants/error-code.constant');

const UsersResponses = {
  registerSuccess(user) {
    return {
      statusCode: 201,
      payload: { user },
    };
  },
  registerAlreadyUsername() {
    return {
      statusCode: 200,
      payload: {
        msg: 'Username is already exist',
        error: REGISTER_ALREADY_USERNAME,
      },
    };
  },
  registerAlreadyEmail() {
    return {
      statusCode: 200,
      payload: {
        msg: 'Email is already exist',
        error: REGISTER_ALREADY_EMAIL,
      },
    };
  },
  loginNotExistUsername() {
    return {
      statusCode: 200,
      payload: {
        msg: 'Username is not exist',
        errorCode: LOGIN_FAIL_USERNAME,
      },
    };
  },
  loginNotCorrectRole() {
    return {
      statusCode: 200,
      payload: {
        msg: 'Role is not correct',
        errorCode: LOGIN_FAIL_ROLE,
      },
    };
  },
  loginNotCorrectPassword() {
    return {
      statusCode: 200,
      payload: {
        msg: 'Password was wrong',
        errorCode: LOGIN_FAIL_PASSWORD,
      },
    };
  },
  loginFailUserAlreadyActivated() {
    return {
      statusCode: 200,
      payload: {
        msg: 'User have not yet activated',
        errorCode: USER_NOT_YET_ACTIVATED,
      },
    };
  },
  loginSuccess(token) {
    return {
      statusCode: 200,
      payload: {
        accessToken: token,
      },
    };
  },
  getAllSuccess(users) {
    return {
      statusCode: 200,
      payload: {
        users,
      },
    };
  },
  emailNotExist() {
    return {
      statusCode: 200,
      payload: {
        msg: 'User with this email is not exist',
        errorCode: EMAIL_IS_NOT_EXIST,
      },
    };
  },

  verifyFailOtpIsNotCorrect() {
    return {
      statusCode: 200,
      payload: {
        msg: 'OTP is not correct',
        errorCode: OTP_IS_NOT_CORRECT,
      },
    };
  },
  verifyFailOtpExpired() {
    return {
      statusCode: 200,
      payload: {
        msg: 'OTP is expired',
        errorCode: OTP_IS_EXPIRED,
      },
    };
  },
  resetSuccess(user) {
    return {
      statusCode: 200,
      payload: {
        user,
      },
    };
  },
  verifySuccess(user) {
    return {
      statusCode: 200,
      payload: {
        user,
      },
    };
  },
};

module.exports = {
  UsersResponses,
};
