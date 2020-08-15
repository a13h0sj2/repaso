import { Schema as _Schema, model } from 'mongoose';
const Schema = _Schema;

const Meals = model('Order', new Schema({
   name:String,
   desc:String,
}))
export default Meals;