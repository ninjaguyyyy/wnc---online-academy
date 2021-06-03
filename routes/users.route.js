const express = require("express");
const router = express.Router();

const userService = require("../services/users.service");

router.post("/register", async (req, res) => {
    const jsonResponse = await userService.register(req.body);

    res.status(jsonResponse.statusCode).json(jsonResponse);
});

module.exports = router;
