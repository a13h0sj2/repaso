const express =  require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser:true,useUnifiedTopology:true});

const Users = mongoose.model('User', new mongoose.Schema({
                                        name:String
                                    })
                            );
Users.create({name:'Daniel Celi'})
app.get('*',(req,res)=>{
    Users.find()
        .then(x=>res.send(x));
    
})
module.exports = app;