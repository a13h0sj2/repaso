const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Meals = mongoose.model('Meal', new Schema({
   name:String,
   desc:String
}))

Meals.create({name:'hot Dog',desc:'Riquisimo'})
module.exports = Meals