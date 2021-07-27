const hashingManager = require('../helpers/hashing.helper');
const { UsersResponses } = require('../helpers/responses');
const UserFactory = require('../models/factories/user.factory');
const UserRepository = require('../models/repositories/user.repository');

module.exports.createUser = async (req, res) => {
  const user = req.body;
  let isUsernameExist = await checkUsernameExist(user.userName);
  if (isUsernameExist) {
    return res.status(200).json({ success: false, msg: 'Username was exist' });
  }

  let isEmailExist = await checkEmailExist(user.email);
  if (isEmailExist) {
    return res.status(200).json({ success: false, msg: 'Email was exist' });
  }

  const hashedPassword = hashingManager.generateHashPassword(user.passWord);
  user.passWord = hashedPassword;
  user.isActivated = true;
  user.createdByAdmin = true;

  const userDocument = await UserRepository.insertUser(user);

  return res.status(201).json({ success: true, user: userDocument });
};

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
