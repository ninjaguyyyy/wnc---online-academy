const { ROLE } = require('../constants/models.constant');

module.exports = function (role) {
  return (req, res, next) => {
    const user = req.user;

    if (user.role === role) {
      next();
    } else {
      return res.status(403).json({
        msg: 'Your role is not permission',
      });
    }
  };
};
