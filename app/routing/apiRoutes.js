const employees = require('../data/employees')

module.exports = function(app) { 
    app.get('/api/employees', function(req, res) {
        res.json(employees);
    });

    app.post('/api/employees', function(req, res) {
        // calculate the best match based off the request body

        const bestMatch = {
            name: '',
            photo: '',
            employeeDifference: Infinity
        }

        const userData = req.body;

        employees.push(userData);

        res.json(bestMatch);

        console.log(userData);

    });
}