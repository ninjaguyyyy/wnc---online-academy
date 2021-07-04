const userService = require('../services/users.service');

const register = async (req, res) => {
  const { statusCode, payload } = await userService.register(req.body);
  res.status(statusCode).json(payload);
};

const resetOTP = async (req, res) => {
  const { statusCode, payload } = await userService.resetOTP(req.body.email);
  res.status(statusCode).json(payload);
};

const OTPVerifyUser = async (req, res) => {
  const { statusCode, payload } = await userService.verifyUser(req.body);
  res.status(statusCode).json(payload);
};

const login = async (req, res) => {
  const { statusCode, payload } = await userService.login(req.body);
  res.status(statusCode).json(payload);
};

const getAll = async (req, res) => {
  const { statusCode, payload } = await userService.getAll();
  res.status(statusCode).json(payload);
};

const updateProfile = async (req, res) => {
  const { statusCode, payload } = await userService.updateProfile(
    req.user,
    req.body
  );
  res.status(statusCode).json(payload);
};

const getProfile = async (req, res) => {
  const { statusCode, payload } = await userService.updateProfile(req.user);
  res.status(statusCode).json(payload);
};

const refreshToken = async (req, res) => {
  const { statusCode, payload } = await userService.refreshToken(req.body);
  res.status(statusCode).json(payload);
};

const changePassword = async (req, res) => {
  const { statusCode, payload } = await userService.changePassword(
    req.user,
    req.body
  );
  res.status(statusCode).json(payload);
};

module.exports = {
  register,
  login,
  getAll,
  OTPVerifyUser,
  resetOTP,
  updateProfile,
  getProfile,
  refreshToken,
  changePassword,
};
