const express =  require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors')
const meals = require('./routes/meals')
const orders = require('./routes/orders')

const app = express()
app.use(bodyParser.json())
app.use(cors())

mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser:true,useUnifiedTopology:true});
const pruebaC = mongoose.model('User', new mongoose.Schema({name:String}))
pruebaC.create({name:'entro'})
app.get('*',(req,res)=>{
    console.log('asd');
    res.send({mensaje:'asdsadsaasd'})
})

app.use('/api/meals',meals)
app.use('/api/orders',orders)
    
module.exports = app;