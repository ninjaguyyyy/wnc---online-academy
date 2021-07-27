const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth.mdw');
const role = require('../middlewares/role.mdw');
const adminController = require('../controllers/admin.controller');
const { ROLE } = require('../constants/models.constant');

router.post('/users', auth, role(ROLE.ADMIN), adminController.createUser);

module.exports = router;
