const express = require('express');
const app = express();
var ejs = require('ejs');
const bodyParser = require('body-parser');
const session = require('express-session')

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(session({
    secret: 'supersecret'
}))
const subscribeToRoutes = require('./routing/index');

subscribeToRoutes(app);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});