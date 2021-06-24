const { UsersResponses } = require('../helpers/responses.helper');
const hashingManager = require('../helpers/hashing.helper');
const tokenManager = require('../helpers/token.helper');
const UserRepository = require('../models/repositories/user.repository');
const UserFactory = require('../models/factories/user.factory');
const dayjs = require('dayjs');
require('dayjs/locale/vi');
dayjs.locale('vi');
const { randomOTPNumber } = require('../helpers/random');
const emailService = require('./email.service');

const userService = {
  register,
  verifyUser,
  login,
  getAll,
  resetOTP,
};

async function register(user) {
  let isUsernameExist = await checkUsernameExist(user.userName);
  if (isUsernameExist) {
    return UsersResponses.registerAlreadyUsername();
  }

  let isEmailExist = await checkEmailExist(user.email);
  if (isEmailExist) {
    return UsersResponses.registerAlreadyEmail();
  }

  const hashedPassword = hashingManager.generateHashPassword(user.passWord);
  user.passWord = hashedPassword;

  user.otp = createOTP();

  const userDocument = await UserRepository.insertUser(user);
  userDocument.passWord = null;

  emailService.sendOTP(user.email, otp.number);

  return UsersResponses.registerSuccess(userDocument);
}

async function resetOTP(email) {
  const user = await UserFactory.findByEmail(email);
  if (!user) {
    return UsersResponses.emailNotExist();
  }

  user.otp = createOTP();
  const updatedUser = await user.save();

  return UsersResponses.resetSuccess(updatedUser);
}

async function verifyUser({ email, otp }) {
  const user = await UserFactory.findByEmail(email);
  if (!user) {
    return UsersResponses.emailNotExist();
  }

  if (user.otp.number !== otp) {
    return UsersResponses.verifyFailOtpIsNotCorrect();
  }
  if (dayjs(user.otp.expired).isBefore(dayjs())) {
    return UsersResponses.verifyFailOtpExpired();
  }

  user.isActivated = true;
  const updatedUser = await user.save();

  return UsersResponses.verifySuccess(updatedUser);
}

async function login(user) {
  const { userName, passWord, role } = user;

  let isUsernameExist = await checkUsernameExist(userName);
  if (!isUsernameExist) {
    return UsersResponses.loginNotExistUsername();
  }

  const userDocument = await UserFactory.findByUsername(userName);

  if (userDocument.role !== role) {
    return UsersResponses.loginNotCorrectRole();
  }

  if (!userDocument.isActivated) {
    return UsersResponses.loginFailUserAlreadyActivated();
  }

  const isValidatePassword = hashingManager.checkValidPassword(
    passWord,
    userDocument.passWord
  );
  if (!isValidatePassword) {
    return UsersResponses.loginNotCorrectPassword();
  }

  var token = tokenManager.generateAccessToken({
    userId: userDocument._id,
    role,
  });

  return UsersResponses.loginSuccess(token);
}

async function getAll() {
  const users = await UserFactory.findAll();

  return UsersResponses.getAllSuccess(users);
}

const checkUsernameExist = async (userName) => {
  let result = false;

  const userDocument = await UserFactory.findByUsername(userName);
  if (userDocument) {
    result = true;
  }

  return result;
};

const checkEmailExist = async (username) => {
  let result = false;

  const userDocument = await UserFactory.findByEmail(username);
  if (userDocument) {
    result = true;
  }

  return result;
};

function createOTP() {
  return {
    number: randomOTPNumber(),
    expired: dayjs().add(5, 'm').format(),
  };
}

module.exports = userService;
