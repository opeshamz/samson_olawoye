
const express = require('express')
const router = express.Router()
const validation = require('../models/validationModel')

// Getting all

router.get('/', (req, res) => {
  try {
    res.status(200).json(validation)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})
// Creating on
router.post('/', (req, res) => {

  const scrams = {
    "rule": {
      "field": "missions",
      "condition": "gte",
      "condition_value": 30
    },

    "data": req.body
  };

  // mising data
  if (!scrams.data.missions) {
    return res.status(400).json(
        {
          "message": "missions is required.",
          "status": "err",
          "data": null
        }
    )
  }
// check for object
  else if (typeof (scrams.data.missions) !== 'object') {
    return res.status(400).json({
      "message": "missions should be an abject",
      "status": "error",
      "data": null

    })
  }

//If the field specified in the rule object is missing from the data passed
  else if (!scrams.data.missions.count) {
    return res.status(400).json(
        {
          "message": "count is missing from data.",
          "status": "error",
          "data": null
        }
    )
  }
  //If the rule is successfully validated, your endpoint response (HTTP 200 status code) should be:
  else if (scrams.data.missions.count >= 30) {
    return res.status(200).json(
        {
          "message": "count successfully validated.",
          "status": "success",
          "data": {
            "validation": {
              "error": false,
              "field": "count",
              "field_value": scrams.data.missions.count,
              "condition": "gte",
              "condition_value": 30
            }
          }
        }
    )
  }
  //  If the rule validation fails, your endpoint response (HTTP 400 status code) should be:

  else if (scrams.data.missions.count < 30) {
    return res.status(200).json(
        {
          "message": "count failed validation.",
          "status": "error",
          "data": {
            "validation": {
              "error": true,
              "field": "count",
              "field_value": scrams.data.missions.count,
              "condition": "gte",
              "condition_value": 30
            }
          }
        }
    )
  } else {
    return res.status(400).json(
        {
          "message": "Invalid JSON payload passed.",
          "status": "error",
          "data": null
        }
    )
  }

})

module.exports = router




