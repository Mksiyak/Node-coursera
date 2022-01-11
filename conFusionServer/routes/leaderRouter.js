var express = require('express'),
  app = express.Router();

app.all("/", (req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
});

app.get('/', (req, res, next) => {
  res.end('Will send all the leaders to you!');
});

app.post('/', (req, res, next) => {
  res.end('Will add the leader: ' + req.body.name + ' with details: ' + req.body.description);
});

app.put('/', (req, res, next) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on /leaders');
});

app.delete('/', (req, res, next) => {
  res.end('Deleting all leaders');
});

app.get('/:leaderId', (req, res, next) => {
  res.end('Will send details of the leader: ' + req.params.leaderId + ' to you!');
});

app.post('/:leaderId', (req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation not supported on /leaders/' + req.params.leaderId);
});

app.put('/:leaderId', (req, res, next) => {
  res.write('Updating the leader: ' + req.params.leaderId + '\n');
  res.end('Will update the leader: ' + req.body.name +
    ' with details: ' + req.body.description);
});

app.delete('/:leaderId', (req, res, next) => {
  res.end('Deleting leader: ' + req.params.leaderId);
});

module.exports = app;