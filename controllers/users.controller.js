const userService = require('../services/users.service')

const register = async (req, res) => {
  const { statusCode, payload } = await userService.register(req.body)

  res.status(statusCode).json(payload)
}

const login = async (req, res) => {
  const { statusCode, payload } = await userService.login(req.body)

  res.status(statusCode).json(payload)
}

const getAll = async (req, res) => {
  const { statusCode, payload } = await userService.getAll(req.body)

  res.status(statusCode).json(payload)
}
module.exports = {
  register,
  login,
  getAll,
}
