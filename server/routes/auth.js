const express = require('express')

const { applyAuthRoutes } = require('authenticare/server')

const {
  userExists,
  getUserById,
  createUser

} = require('../db/users')

const router = express.Router()

applyAuthRoutes(router, {
  userExists,
  getUserById,
  createUser
})

module.exports = router
