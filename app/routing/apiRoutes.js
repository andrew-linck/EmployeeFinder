const employees = require('../data/employees')

module.exports = function (app) {
    app.get('/api/employees', function (req, res) {
        res.json(employees);
    });

    app.post('/api/employees', function (req, res) {

        const userData = req.body;
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        
        // function to total the sum
        const surveyTotal = function (userData) {
            var userScores = userData.scores;
            var reducedUserScores = userScores.map(Number)
            var userSum = reducedUserScores.reduce(reducer)
            return userSum
        }

        let userSum = surveyTotal(userData)

        // This variable will calculate the difference between the user's scores and the scores of
        // each user in the employees data
        let lowestDifference=100;
        let employeeRating=100;
        let employeeMatch;
        let employeeSum = 0;


        // Here we loop through all the employee possibilities in the employees data.
        // Logic courtesy off jim-walker on github. I struggled to come up with a solution on my own, so I used his.

        for (let i = 0; i < employees.length; i++) {
            employeeSum = 0;
            employeeSum = employees[i].scores.reduce(reducer);
            employeeRating =  Math.abs(parseInt(userSum) - parseInt(employeeSum));

            // This is the part that I stumbled on. I realized I needed to make my own variable and then have a function check if 
            if (employeeRating<=lowestDifference){
                lowestDifference=employeeRating;
                employeeMatch=i;
            }
        }

        const bestMatch = {
            'name': employees[employeeMatch].name,
            'photo': employees[employeeMatch].photo,
            'difference': employeeRating
        };
        employees.push(userData);
        res.json(bestMatch);
    });
}