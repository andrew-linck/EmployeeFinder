const express = require('express');
const path = require('path');
const bodyparser = require('body-parser')

const app = express();

const PORT = 8080;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyparser.urlencoded());

require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);

app.listen(PORT, function() {
    console.log("Listening on port " + PORT);
});