const User = require('../user.model');

const UserFactory = {
  findByUsername(userName) {
    return User.findOne({ userName });
  },
  findByEmail(email) {
    return User.findOne({ email });
  },
  findAll() {
    return User.find({});
  },
};

module.exports = UserFactory;
