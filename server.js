const express = require('express')
const app = express()
const PORT= process.env.PORT ||380




app.use(express.json())



const screams = require('./routes/screams')
app.use('/', screams);
const validation = require('./routes/validation')
app.use('/api/validate-rule', validation);




app.listen(PORT, () => console.log(`Server Started ${PORT}`))
