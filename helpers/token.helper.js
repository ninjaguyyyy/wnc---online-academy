const jwt = require("jsonwebtoken");
const EXPIRE = 3600;
const tokenManager = {};

const generateAccessToken = (info) => {
    return jwt.sign(info, process.env.JWT_SECRET_KEY, {
        expiresIn: EXPIRE,
    });
};

tokenManager.generateAccessToken = generateAccessToken;

module.exports = tokenManager;
