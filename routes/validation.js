const express = require('express')
const router = express.Router()
const validation = require('../models/validationModel')

// Getting all

router.get('/', async (req, res) => {
  try {
    res.status(200).json(validation)
  } catch (err) {
     res.status(500).json({ message: err.message })
  }
})




// Creating one

router.post('/', (req, res) => {
const{name, crew, age,position,missions} = req.body
  const scrams = {
      "rule": {
      "field": "missions",
      "condition": "gte",
      "condition_value": 30
    },



    "data":{
        name,
        crew,
        age,
        position,
        missions,
    }
  }

  if(typeof scrams.data.missions !== 'object'){
    return res.status(400).json({
      "message": "[field] should be a|an [type].",
      "status": "error",
      "data": null

    })
  }

else if(!scrams.data.missions){
return res.send(
    {
      "message": "missions is required.",
      "status": "error",
      "data": null
    }
)
}



})

// Updating One

module.exports = router

  /*if(req.body.missions >= 40){
    return res.status(400).json({
      "message": " missions is required.",
      "status": "error",
      "data": null
    })
  }

  if(req.body.missions ==""){
    return res.status(400).json({
      "message": " missions is required.",
      "status": "error",
      "data": null
    })
}
if(!req.body.missions){
  return res.status(400).json({
    "message": "missions is missing from data.",
    "status": "error",
    "data": null
  })
}
 if(isNaN(req.body.missions)){
  return res.status(400).json({
    "message": "missions should be a number.",
    "status": "error",
    "data": null
  })
}
*/



