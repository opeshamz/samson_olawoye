const express = require('express')
const router = express.Router()
const data = require('../models/screamsModel')

// Getting all
router.get('/', async (req, res) => {
  try {
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

module.exports = router
