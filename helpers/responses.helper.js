const {
    REGISTER_ALREADY_USERNAME,
    LOGIN_FAIL_PASSWORD,
    LOGIN_FAIL_ROLE,
    LOGIN_FAIL_USERNAME,
    REGISTER_ALREADY_EMAIL,
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
    registerAlreadyEmail() {
        return {
            statusCode: 200,
            payload: {
                msg: "Email is already exist",
                error: REGISTER_ALREADY_EMAIL,
            },
        };
    },
    loginNotExistUsername() {
        return {
            statusCode: 200,
            payload: {
                msg: "Username is not exist",
                errorCode: LOGIN_FAIL_USERNAME,
            },
        };
    },
    loginNotCorrectRole() {
        return {
            statusCode: 200,
            payload: {
                msg: "Role is not correct",
                errorCode: LOGIN_FAIL_ROLE,
            },
        };
    },
    loginNotCorrectPassword() {
        return {
            statusCode: 200,
            payload: {
                msg: "Password was wrong",
                errorCode: LOGIN_FAIL_PASSWORD,
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
};

module.exports = {
    UsersResponses,
};
