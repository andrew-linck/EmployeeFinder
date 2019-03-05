const Person = require('../models/Person');
const Kudos = require('../models/Kudos');

module.exports = function (app) {
  app.post('/kudos', function (req, res) {
    // store the req.body in the kudos database
    res.json(data)
  });

  app.get('/kudos', function (req, res) {
    // get all kudos data from database
    res.json(data)
  });
}