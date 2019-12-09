const express = require('express')

const { applyAuthRoutes } = require('authenticare/server')

const {
  userExists,
  getUserById,
  createUser,
  getUserByName

} = require('../db/users')

const router = express.Router()

applyAuthRoutes(router, {
  userExists,
  getUserById,
  createUser,
  getUserByName
})

module.exports = router
