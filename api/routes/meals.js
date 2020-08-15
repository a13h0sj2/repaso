  const express = require('express');
  const Meals = requiere('../models/Melas');

  const router = express.Router()

  router.get('/',(req,res)=>{
    Meals.find()
    .exec()
    .then(x=>res.status(200).send(x))
  })

  router.get('/:id',(req,res)=>{
    Meals.findById(req.param.id)
    .exec()
    .then(x=>res.status(200).send(x))
  })

  router.post('/',(req,res)=>{
    Meals.create(req.body)
    .then(x=>res.status(201).send(x))
  })

  router.put('/:id',(req,res)=>{
    Meals.findByIdAndUpdate(req.params.id, req.body)
    .then(()=>res.sendStatus(204))
  })

  router.delete('/:id',(req,res)=>{
    Meals.findOneAndDelete(req.param.id)
    .exec()
    .then(()=>res.sendStatus(204))
  })

  module.exports = router;