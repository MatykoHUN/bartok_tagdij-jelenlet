const express = require('express');
const app = express();
var ejs = require('ejs');
const bodyParser = require('body-parser');
const session = require('express-session');

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 


app.set('view engine', 'ejs');

//Session
app.use(
    session({
        secret: 'supersecret'
    })
);

const subscribeToRoutes = require('./routing/index');

subscribeToRoutes(app);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});