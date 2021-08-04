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
  findById(id) {
    return User.findOne({ _id: id })
      .populate({
        path: 'favoriteCourses',
        populate: [
          {
            path: 'category',
          },
          {
            path: 'lecturer',
          },
        ],
      })
      .lean()
      .exec();
  },
};

module.exports = UserFactory;
