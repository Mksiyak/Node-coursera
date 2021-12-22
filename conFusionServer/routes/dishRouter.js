var express = require('express'),
    app = express.Router();
const mongoose = require('mongoose');
const Dishes = require('../models/dishes');

app.get('/', (req,res,next) => {
    Dishes.find({})
    .then((dishes)=>{
      res.statusCode = 200;
      res.setHeader('Content-Type','application/json');
      res.json(dishes);
    },(err)=>{next(err);})
    .catch((err)=>{
      next(err);
    })
  })
  .post('/', (req, res, next) => {
      console.log("Dish is ",res.body);
      Dishes.create(req.body)
      .then((dish)=>{
        console.log("Dish created",dish);
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(dish);
      },(err)=>{next(err);})
      .catch((err)=>{
        next(err);
      })
  })
  .put('/', (req, res, next) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on /dishes');
  });
  
  app.delete('/', (req, res, next) => {
    Dishes.remove({})
    .then((resp)=>{
      res.statusCode = 200;
      res.setHeader('Content-Type','application/json');
      res.json(resp);
    },(err)=>{next(err);})
    .catch((err)=>{
      next(err);
    })
  });
  
  app.get('/:dishId', (req,res,next) => {
    Dishes.findById(req.params.dishId)
    .then((dish)=>{
      res.statusCode = 200;
      res.setHeader('Content-Type','application/json');
      res.json(dish);
    },(err)=>{next(err);})
    .catch((err)=>{
      next(err);
    })
  })
  .post('/:dishId', (req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation not supported on /dishes/'+ req.params.dishId);
  })
  .put('/:dishId', (req, res, next) => {
    Dishes.findByIdAndUpdate(req.params.dishId,
      {$set: req.body},
      {new: true})
    .then((dish)=>{
      res.statusCode = 200;
      res.setHeader('Content-Type','application/json');
      res.json(dish);
    },(err)=>{next(err);})
    .catch((err)=>{
      next(err);
    });
  })
  .delete('/:dishId', (req, res, next) => {
    Dishes.findByIdAndRemove(req.params.dishId)
    .then((dish)=>{
      res.statusCode = 200;
      res.setHeader('Content-Type','application/json');
      res.json(dish);
    },(err)=>{next(err);})
    .catch((err)=>{
      next(err);
    });
  });

module.exports = app;