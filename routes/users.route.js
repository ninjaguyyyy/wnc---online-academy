const express = require('express')
const router = express.Router()

const userRegisterSchema = require('../middlewares/schemas/userRegister.schema.json')
const userLoginSchema = require('../middlewares/schemas/userLogin.schema.json')

const userRegisterValidation = require('../middlewares/validate.mdw')(
  userRegisterSchema
)
const userLoginValidation = require('../middlewares/validate.mdw')(
  userLoginSchema
)
const auth = require('../middlewares/auth.mdw')
const usersController = require('../controllers/users.controller')

router.post('/register', userRegisterValidation, usersController.register)
router.post('/login', userLoginValidation, usersController.login)
router.get('/', auth, usersController.getAll)

module.exports = router
