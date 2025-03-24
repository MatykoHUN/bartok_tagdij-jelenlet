const express = require('express');
const app = express();

const subscribeToRoutes = require('./routing/index');

app.use(express.static('static'));
subscribeToRoutes(app);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});