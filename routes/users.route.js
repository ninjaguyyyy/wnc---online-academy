const express = require("express");
const router = express.Router();

const userRegisterSchema = require("../middlewares/schemas/userRegister.schema.json");
const userLoginSchema = require("../middlewares/schemas/userLogin.schema.json");

const userService = require("../services/users.service");
const userRegisterValidation = require("../middlewares/validate.mdw")(
    userRegisterSchema
);
const userLoginValidation = require("../middlewares/validate.mdw")(
    userLoginSchema
);
const auth = require("../middlewares/auth.mdw");

router.post("/register", userRegisterValidation, async (req, res) => {
    const { statusCode, payload } = await userService.register(req.body);

    res.status(statusCode).json(payload);
});

router.post("/login", userLoginValidation, async (req, res) => {
    const { statusCode, payload } = await userService.login(req.body);

    res.status(statusCode).json(payload);
});

router.get("/", auth, async (req, res) => {
    const { statusCode, payload } = await userService.getAll(req.body);

    res.status(statusCode).json(payload);
});

module.exports = router;
