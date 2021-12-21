var express = require('express'),
    app = express.Router();

app.all("/",(req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  });
  
  app.get('/', (req,res,next) => {
    res.end('Will send all the promotions to you!');
  });
  
  app.post('/', (req, res, next) => {
  res.end('Will add the promotion ' + req.body.name + ' with details: ' + req.body.description);
  });
  
  app.put('/', (req, res, next) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on /promotions');
  });
  
  app.delete('/', (req, res, next) => {
    res.end('Deleting all promotions');
  });
  
  app.get('/:promoId', (req,res,next) => {
    res.end('Will send details of the promotion : ' + req.params.promoId +' to you!');
  });
  
  app.post('/:promoId', (req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation not supported on /promotions/'+ req.params.promoId);
  });
  
  app.put('/:promoId', (req, res, next) => {
  res.write('Updating the promotion: ' + req.params.promoId + '\n');
  res.end('Will update the promotion: ' + req.body.name + 
        ' with details: ' + req.body.description);
  });
  
  app.delete('/:promoId', (req, res, next) => {
    res.end('Deleting promotion: ' + req.params.promoId);
  });

module.exports = app;