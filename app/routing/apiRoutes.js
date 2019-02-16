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
        let lowestDifference=100; // 10
        let employeeRating=100;
        let employeeMatch;
        let employeeSum = 0;


        // Here we loop through all the employee possibilities in the employees data.
        // Logic courtesy of jim-walker on github. I struggled to come up with a solution on my own, so I used his.

        // I did have to use my own pass through for reducing. And I have written notes to clairify how to logic functions

        for (let i = 0; i < employees.length; i++) {
            employeeSum = 0; // Goes through array and for each scores it reduces and makes a sum out of them then the rating is oru sum - their sum.
            employeeSum = employees[i].scores.reduce(reducer);
            employeeRating =  Math.abs(parseInt(userSum) - parseInt(employeeSum));

            // When looping through, this sets the employeeMatch to the most recent loop index (which will be used to find the employee.name in the bestMatch object because the employeeMatch number will match the employee index in our database. If the newest employeeRating that was looped over is lower than the previous (lowestDifference), then the employeeMatch number will change to the index of this most recent loop through which will match the index to find that employee in the employee array.
            if (employeeRating<=lowestDifference){
                lowestDifference=employeeRating;
                employeeMatch=i;
            }
        }
        
        const bestMatch = {
            // employeeMatch is from the if statement up above.
            'name': employees[employeeMatch].name,
            'photo': employees[employeeMatch].photo,
            'difference': employeeRating
        };
        employees.push(userData);
        res.json(bestMatch);
    });
}