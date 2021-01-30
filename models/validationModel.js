

const validation ={
    "rule": {
      "field": "missions.count",
      "condition": "gte",
      "condition_value": 30
    },
    
    "data": {
      "name": "Samson olawoye",
      "crew": "Nodejs Dev",
      "age": 45,
      "position": "Backend",
      "missions": {
        count: 45,
        successful: 44,
        failed: 3
      }
    }
  }
  
   
    
  
  
  module.exports = validation