const express = require('express');
const app = express();

const User = require('./User.js');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/user', (req, res) => {
    res.json(User.getUsernames());
    return;
});

app.get('/user/:username', (req, res) => {
    let u = User.findByUsername(req.params.username);
    if (u == null) {
        res.status(404).send('User does not exist');
    }
    else {
        res.json(u);
    }
    return;
})

app.post('/user', (req, res) => {
    let {username, pass, first, last, email} = req.body;

    if(User.findByUsername(username) != null) {
        res.status(500).send("Username is already taken!");
    }
    else {
        let u = User.create(username, pass, first, last, email);
        res.json(u);
    }
    return;
})

app.put('/user/:username', (req, res) => {
    let u = User.findByUsername(req.params.username);

    if(u == null) {
        res.status(404).send('User does not exist');
    }
    else {
        let {action, stock} = req.body;
        if(action === 'push') {
            let index = u.stocks.indexOf(stock);
            if(index <= -1) {
                u.stocks.push(stock);
            }
            else {
                res.status(500).send('User is already following such stock');
            }
        }
        else {
            let index = u.stocks.indexOf(stock);
            if(index > -1) {
                u.stocks.splice(index, 1);
                if (u.stocks == null) {
                    u.stocks = [];
                }
            }
            else {
                res.status(404).send('User does not follow such stock');
                return;
            }
        }

        User.update(req.params.username, u);
        res.json(User.findByUsername(req.params.username));
    }
    return;
})

const port = process.env.PORT || 80;
app.listen(port, () => {
    console.log("User data API is running on port " + port);
})