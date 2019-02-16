// Bring in employee Data
const employees = require('../data/employee.js');
// createing route handler module
module.exports = function(app) {
  //Get request handler to retrieve employee json
  app.get('/api/employees', function(req, resp) {
    resp.json(employees);
  });
  // Post request handler to process survey results
  app.post('/api/employees', function(req, res) {
    // Here we take the result of the user's survey POST and parse it.
    const userData = req.body;
    const userScores = userData.scores;
    function getSum(total, num) {
        return parseInt(total) + parseInt(num);
    }
    let surveySum = userData.scores.reduce(getSum);

    // This variable will calculate the difference between the user's scores and the scores of
    // each user in the employees data
    let lowestDifference=100;
    let employeeRating=100;
    let employeeMatch;
    let employeeSum = 0;

    // Here we loop through all the employee possibilities in the employees data.
    for (let i = 0; i < employees.length; i++) {
        employeeSum = 0;
        employeeSum = employees[i].scores.reduce(getSum);
        employeeRating =  Math.abs(parseInt(surveySum) - parseInt(employeeSum));
        if (employeeRating<=lowestDifference){
            lowestDifference=employeeRating;
            employeeMatch=i;
        }
    }

    const bestMatch = {
      "name": employees[employeeMatch].name,
      "photo": employees[employeeMatch].photo,
      "difference": employeeRating
    };
    employees.push(userData);
    res.json(bestMatch);
  });
};