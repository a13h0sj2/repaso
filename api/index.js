const express =  require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

const Users = mongoose.model('User', new mongoose.Schema({
                                        name:String
                                    })
                            );
Users.create({name:'Alejandro Silva'})
app.get('*',(req,res)=>{
    Users.find()
        .then(x=>res.send(x));
    
})
module.exports = app;