const express = require('express')

const db = require('../db/db')

const router = express.Router()

const sendGenericErrorMessage = (res) => {
  res.status(500).send(
    "An unexpected error has occurred and we're looking into it"
  )
}

router.get('/', (req, res) => {
  return db.getCategories()
    .then(categories => res.json(categories))
    .catch(() => sendGenericErrorMessage(res))
})

module.exports = router