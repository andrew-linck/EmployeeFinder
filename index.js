const express = require('express');
const path = require('path');

const app = express();

const PORT = 8080;

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './public', 'index.html'));
});

app.get('/food', function(req, res) {
    res.sendFile(path.join(__dirname, './public', 'food.html'));
});

app.get('/frameworks', function(req, res) {
    res.sendFile(path.join(__dirname, './public', 'frameworks.html'));
});


app.get('/index', function(req, res) {
    date = Date();
    res.sendFile(path.join(__dirname, './public', 'index.html'));
});

app.get('/movies', function(req, res) {
    date = Date();
    res.sendFile(path.join(__dirname, './public', 'movies.html'));
});

app.listen(PORT, function() {
    console.log("Listening on port " + PORT);
});

newFunction();