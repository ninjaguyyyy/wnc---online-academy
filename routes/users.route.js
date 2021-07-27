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
const { ROLE } = require('../constants/models.constant');
const auth = require('../middlewares/auth.mdw');
const role = require('../middlewares/role.mdw');
const usersController = require('../controllers/users.controller');

router.get('/', auth, role(ROLE.ADMIN), usersController.getAll);
router.post('/register', userRegisterValidation, usersController.register);
router.post('/resend-otp-email', usersController.resetOTP);
router.post('/otp-verify', usersController.OTPVerifyUser);
router.post('/login', userLoginValidation, usersController.login);
router.put('/profile/update', auth, usersController.updateProfile);
router.get('/profile', auth, usersController.getProfile);
router.post('/refresh-token', usersController.refreshToken);
router.post('/change-password', auth, usersController.changePassword);
router.post('/me/favorite-courses', auth, usersController.addToFavorite);
router.delete(
  '/me/favorite-courses/:id',
  auth,
  usersController.removeFromFavorite
);
router.post('/me/attend-courses', auth, usersController.attendCourse);
router.get(
  '/me/own-courses',
  auth,
  role(ROLE.TEACHER),
  usersController.ownCourses
);

module.exports = router;
