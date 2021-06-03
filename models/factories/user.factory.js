const User = require("../user.model");

const UserFactory = {
    findByUsername: (username) => {
        return User.findOne({ username });
    },
};

module.exports = UserFactory;
