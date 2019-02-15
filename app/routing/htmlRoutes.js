const path = require('path');

module.exports = function(app) { 
    app.get('https://employee-find-someone-similar.herokuapp.com/', function(req, res) {
        res.sendFile(path.join(__dirname, '../public', 'home.html'));
    });

    app.get('https://employee-find-someone-similar.herokuapp.com/survey', function(req, res) {
        res.sendFile(path.join(__dirname, '../public', 'survey.html'));
    });
}