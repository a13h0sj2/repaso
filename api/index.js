const express =  require('express');
const app = express();
app.get('*',(req,res)=>{
    console.log('entro al sistema');
    res.send({mensaje:'Entro hasta el fondo'})
})
module.exports = app;