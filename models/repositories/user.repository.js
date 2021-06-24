const User = require('../user.model');

const UserRepository = {
  insertUser: (user) => {
    return User.create(user);
  },
  updateUser(id, dataToUpdate) {
    return User.findByIdAndUpdate(id, dataToUpdate, { new: true }).exec();
  },
};

module.exports = UserRepository;
