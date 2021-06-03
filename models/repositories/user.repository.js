const User = require("../user.model");

const UserRepository = {
    insertUser: (user) => {
        return User.create(user);
    },
};

module.exports = UserRepository;
