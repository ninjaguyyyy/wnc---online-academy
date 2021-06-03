const User = require("../user.model");

const UserFactory = {
    findByUsername: (userName) => {
        return User.findOne({ userName });
    },
    findByEmail: (email) => {
        return User.findOne({ email });
    },
};

module.exports = UserFactory;
