const express =  requiere('express');
const mongoose = requiere('mongoose');
const bodyParser = requiere('body-parser')
const cors = requiere('cors')
const meals = requiere('./routes/meals')
const orders = requiere('./routes/orders')

const app = express()
app.use(bodyParser.json())
app.use(cors())

mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser:true,useUnifiedTopology:true});

app.use('/api/meals',meals)
app.use('/api/orders',orders)
    
module.exports = app;