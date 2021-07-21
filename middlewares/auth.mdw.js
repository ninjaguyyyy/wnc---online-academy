const tokenManager = require('../helpers/token.helper');

module.exports = function (req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) {
    return res.status(401).json({
      msg: 'Not Auth',
    });
  }

  try {
    const decoded = tokenManager.verifyToken(token);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ msg: 'Token is invalid' });
  }
};
