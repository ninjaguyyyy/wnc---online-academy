const express = require("express");
const router = express.Router();

const userSchema = require("../middlewares/schemas/user.schema.json");

const userService = require("../services/users.service");
const userValidation = require("../middlewares/validate.mdw")(userSchema);

router.post("/register", userValidation, async (req, res) => {
    const jsonResponse = await userService.register(req.body);

    res.status(jsonResponse.statusCode).json(jsonResponse);
});

module.exports = router;
