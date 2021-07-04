const express = require('express');
const router = express.Router();

const userRegisterSchema = require('../middlewares/schemas/userRegister.schema.json');
const userLoginSchema = require('../middlewares/schemas/userLogin.schema.json');

const userRegisterValidation = require('../middlewares/validate.mdw')(
  userRegisterSchema
);
const userLoginValidation = require('../middlewares/validate.mdw')(
  userLoginSchema
);
const auth = require('../middlewares/auth.mdw');
const usersController = require('../controllers/users.controller');

router.get('/', auth, usersController.getAll);
router.post('/register', userRegisterValidation, usersController.register);
router.post('/resend-otp-email', usersController.resetOTP);
router.post('/otp-verify', usersController.OTPVerifyUser);
router.post('/login', userLoginValidation, usersController.login);
router.put('/profile/update', auth, usersController.updateProfile);
router.get('/profile', auth, usersController.getProfile);
router.post('/refresh-token', usersController.refreshToken);
router.post('/change-password', auth, usersController.changePassword);

module.exports = router;
