const {
    REGISTER_ALREADY_USERNAME,
} = require("../constants/error-code.constant");

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
                msg: "Username is already exist",
                error: REGISTER_ALREADY_USERNAME,
            },
        };
    },
};

module.exports = {
    UsersResponses,
};
