const { UsersResponses } = require("../helpers/responses.helper");
const hashingManager = require("../helpers/hashing.helper");
const tokenManager = require("../helpers/token.helper");
const UserRepository = require("../models/repositories/user.repository");
const UserFactory = require("../models/factories/user.factory");

const userService = {
    register,
    login,
    getAll,
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

    await UserRepository.insertUser(user);
    delete user.passWord;

    return UsersResponses.registerSuccess(user);
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

module.exports = userService;
