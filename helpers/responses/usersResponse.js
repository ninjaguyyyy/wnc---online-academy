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
  REFRESH_TOKEN_REVOKED,
  ACCESS_TOKEN_INVALID,
  WRONG_PASSWORD,
} = require('../../constants/error-code.constant');

const RegisterResponses = {
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
};

const LoginResponses = {
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
  loginSuccess(accessToken, refreshToken, user) {
    return {
      statusCode: 200,
      payload: {
        accessToken,
        refreshToken,
        user,
      },
    };
  },
};

const GetAllResponses = {
  getAllSuccess(users) {
    return {
      statusCode: 200,
      payload: {
        users,
      },
    };
  },
};

const ResetResponses = {
  emailNotExist() {
    return {
      statusCode: 200,
      payload: {
        msg: 'User with this email is not exist',
        errorCode: EMAIL_IS_NOT_EXIST,
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
};

const VerifyResponses = {
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
  verifySuccess(user) {
    return {
      statusCode: 200,
      payload: {
        user,
      },
    };
  },
};

const UpdateProfileResponses = {
  updateSuccess(user) {
    return {
      statusCode: 200,
      payload: {
        user,
      },
    };
  },
};

const GetProfileResponses = {
  getSuccess(user) {
    return {
      statusCode: 200,
      payload: {
        user,
      },
    };
  },
};

const RefreshTokenResponses = {
  refreshSuccess(accessToken) {
    return {
      statusCode: 200,
      payload: {
        accessToken,
      },
    };
  },

  refreshFailTokenRevoked() {
    return {
      statusCode: 400,
      payload: {
        msg: 'Refresh token is revoked!',
        errorCode: REFRESH_TOKEN_REVOKED,
      },
    };
  },

  refreshFailTokenInvalid() {
    return {
      statusCode: 400,
      payload: {
        msg: 'Access token is invalid!',
        errorCode: ACCESS_TOKEN_INVALID,
      },
    };
  },
};
const ChangePasswordResponses = {
  changeSuccess() {
    return {
      statusCode: 200,
      payload: {
        success: true,
      },
    };
  },

  changeFailWrongPassword() {
    return {
      statusCode: 400,
      payload: {
        msg: 'Old password was wrong!',
        errorCode: WRONG_PASSWORD,
      },
    };
  },
};

const UsersResponses = {
  RegisterResponses,
  LoginResponses,
  ResetResponses,
  VerifyResponses,
  GetAllResponses,
  UpdateProfileResponses,
  GetProfileResponses,
  RefreshTokenResponses,
  ChangePasswordResponses,
};

module.exports = UsersResponses;
