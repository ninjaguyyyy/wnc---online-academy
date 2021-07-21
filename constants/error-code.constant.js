const ERROR_CODE = {
  LOGIN_FAIL_PASSWORD: 'login_fail_password',
  LOGIN_FAIL_ROLE: 'login_fail_role',
  LOGIN_FAIL_USERNAME: 'login_fail_username',
  REGISTER_ALREADY_USERNAME: 'register_already_username',
  REGISTER_ALREADY_EMAIL: 'register_already_email',
  USER_NOT_YET_ACTIVATED: 'user_not_yet_activated',
  EMAIL_IS_NOT_EXIST: 'email_is_not_exist',
  OTP_IS_NOT_CORRECT: 'otp_is_not_correct',
  OTP_IS_EXPIRED: 'otp_is_expired',
  REFRESH_TOKEN_REVOKED: 'refresh_token_revoked',
  ACCESS_TOKEN_INVALID: 'access_token_invalid',
  WRONG_PASSWORD: 'wrong_password',
};

module.exports = ERROR_CODE;
