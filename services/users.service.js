const { checkUsernameExist } = require("../helpers/db.helper");
const { UsersResponses } = require("../helpers/responses.helper");

const userService = {
    register,
};

async function register(user) {
    // validate user client sent: username, password

    // let isUsernameExist = await checkUsernameExist(user.username);
    // if (isUsernameExist) {
    //     return UsersResponses.registerAlreadyUsername();
    // }

    // const hashedPassword = hashingManager.generateHashPassword(user.password);
    // user.password = hashedPassword;

    // await rootUserRepository.insertUser(user);
    // delete user.password;

    return UsersResponses.registerSuccess(user);
}

module.exports = userService;
