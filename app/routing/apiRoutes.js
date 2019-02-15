const employees = require('../data/employees')

module.exports = function (app) {
    app.get('/api/employees', function (req, res) {
        res.json(employees);
    });

    app.post('/api/employees', function (req, res) {

        const userData = req.body;

        const reducer = (accumulator, currentValue) => accumulator + currentValue;

        const surveyTotal = function (userData) {
            var userScores = userData.scores;
            var reducedUserScores = userScores.map(Number)
            var userSum = reducedUserScores.reduce(reducer)
            return userSum
        }

        var userSum = surveyTotal(userData)
        console.log(`User Sum: ${userSum}`)

        // total 


        // loop through

        const employeeTotals = function (employees) {
            employees.forEach(function (employee) {
                var name = employee.name;
                var employeeSum = employee.scores.reduce(reducer)
                var difference = employeeSum - userSum;
                console.log(`${name}: ${difference}`)
            });
        }
        employeeTotals(employees);

        employees.push(userData);

        const bestMatch = {
            name: '',
            photo: '',
            employeeDifference: Infinity
        }


        res.json(bestMatch);

    });
}