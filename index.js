const express = require('express');

const app = express();

const User = require('./User.js');

app.get('/user', (req, res) => {
    res.json(User.getUsernames);
    return;
});

const port = 3030;

app.listen(port, () => {
    console.log("User data API is running on port " + port);
})