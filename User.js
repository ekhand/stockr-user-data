const user_data = require('data-store')({path: process.cwd() + '/data/user.json'});

class User {

    constructor (username, pass, first, last, email, stocks) {
        this.username = username;
        this.pass = pass;
        this.first = first;
        this.last = last;
        this.email = email;
        this.stocks = stocks;
    }
}

User.getUsernames = () => {
    //return array of all usernames
    return Object.keys(user_data.data);
}

User.findByUsername = (username) => {
    //finds user by username
    let udata = user_data.get(username);
    if(udata == null) {
        return null;
    }
    else {
        return new User(udata.username, udata.pass, udata.first, udata.last, udata.email, udata.stocks);
    }
}

User.create = (username, pass, first, last, email) => {
    //creates new user
    let u = new User(username, pass, first, last, email, []);
    user_data.set(username, u);
    return u;
}

User.update = (username, userObj) => {
    user_data.set(username, userObj);
}

let u1 = new User("ekhand", "comp426", "Eli", "Handwerk", "ekhand@live.unc.edu");
user_data.set(u1.username, u1)

module.exports = User;