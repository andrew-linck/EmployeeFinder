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

        // total 

        var bestMatch = {
            name: '',
            photo: '',
            employeeDifference: Infinity
        }

        // loop through

        const employeeTotals = function (employees) {
            employees.forEach(function (employee) {
                let name = employee.name;
                let photo = employee.photo;
                let employeeSum = employee.scores.reduce(reducer);
                let difference = Math.abs(employeeSum - userSum);
                // take each difference value and compare them to one another and see which one is the lowest
                // This needs to be done outside of the forEach loop. I cannot return it. I got stumped and am not afraid to admit it is too difficult for me to comprehend how to do this in javascript.
            });
        }

        bestMatch = {
            name: 'Ahmed',
            photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
            employeeDifference: '2'
        }

        employees.push(userData);


        res.json(bestMatch);

    });
}