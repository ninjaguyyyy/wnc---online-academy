const jwt = require("jsonwebtoken");
const EXPIRE = 3600;
const tokenManager = {};

const generateAccessToken = (info) => {
    return jwt.sign(info, process.env.JWT_SECRET_KEY, {
        expiresIn: EXPIRE,
    });
};

const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET_KEY);
}

const verifyTokenIgnoreExpired = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET_KEY, {ignoreExpiration: true,});
}

tokenManager.generateAccessToken = generateAccessToken;
tokenManager.verifyToken = verifyToken;
tokenManager.verifyTokenIgnoreExpired = verifyTokenIgnoreExpired;

module.exports = tokenManager;
