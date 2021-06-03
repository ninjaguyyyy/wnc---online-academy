const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (token == null) {
        return res.status(401).json({
            msg: "No Auth",
        });
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, result) => {
        if (err || !result) {
            return res.status(401).json({ msg: "Token is not valid" });
        }

        req.user = result;
        next();
    });
};
