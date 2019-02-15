const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')

const app = express();

const PORT = proccess.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'app/public')));
app.use(bodyParser.urlencoded({extended: true}));

require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);

app.listen(PORT, function() {
    console.log("Listening on port " + PORT);
});