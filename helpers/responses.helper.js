const {
    REGISTER_ALREADY_USERNAME,
    LOGIN_FAIL_PASSWORD,
    LOGIN_FAIL_USERNAME,
    REGISTER_ALREADY_EMAIL,
    LOGIN_FAIL_ROLE,
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
    loginSuccess(token) {
        return {
            statusCode: 200,
            payload: {
                accessToken: token,
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
                msg: "Permission is not valid",
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
