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



// Getting One
router.get('/:id', getscream, (req, res) => {
  res.json(res.scream)
})

// Creating one
router.post('/', async (req, res, next) => {
  const screamss = new Screams({
    name: req.body.name,
    email:req.body.email,
    mobile: req.body.mobile,
    twitter: req.body.twitter,
    github: req.body.github,
   
  })
  try {
    const newScream = await screamss.save()
    res.status(201).json({
     data: newScream
    })
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Updating One
router.patch('/:id', getscream, async (req, res) => {
  if (req.body.handle != null) {
    res.scream.handle = req.body.handle
  }
  if (req.body.scream != null) {
    res.scream.scream = req.body.scream
  }
  try {
    const updatedscream = await res.scream.save()
    res.json(updatedscream)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Deleting One
router.delete('/:id', getscream, async (req, res) => {
  try {
    await res.scream.remove()
    res.json({ message: 'Deleted Scream' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

async function getscream(req, res, next) {
  let scream
  try {
    scream = await Screams.findById(req.params.id)
    if (scream == null) {
      return res.status(404).json({ message: 'Cannot find scream' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.scream = scream
  next()
}

module.exports = router