const express =  require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors')
const meals = require('./routes/meals')
const orders = require('./routes/orders')

const app = express()
app.use(bodyParser.json())
app.use(cors())

mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
});

app.get('*',(req,res)=>{
    pruebaC.find()
    .then(x=>res.send(x))
})

app.use('/api/meals',meals)
app.use('/api/orders',orders)
    
module.exports = app;