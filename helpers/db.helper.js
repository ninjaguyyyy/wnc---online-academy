const UserFactory = require("../models/factories/user.factory");

module.exports.checkUsernameExist = async function (username) {
    let result = false;

    const userDocument = await UserFactory.findByUsername(username);
    if (userDocument) {
        result = true;
    }

    return result;
};
