const employees = require('../data/employees')

module.exports = function(app) {
    app.get('/api/employees', function(req, res) {
        res.json(employees);
    });

    app.post('/api/employees', function(req, res) {

    const bestMatch = {
        name: '',
        photo: '',
        employeeDifference: Infinity
    }

    const userData = req.body;

    console.log(userData.scores)

    employees.forEach(function(employee) {
        var scores = employee.scores;
        console.log(scores)
        // scores.forEach(function(score) {
        //     var diff = score - userData.scores[i]
        //     // console.log(diff)
        // })
    });

    employees.push(userData);

    
    userData.scores
            res.json(bestMatch);

    });
}