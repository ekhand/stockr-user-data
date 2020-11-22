class User {

    constructor (username, first, last, email) {
        this.username = username;
        this.first = first;
        this.last = last;
        this.email = email;
        this.stocks = [];
    }
}

User.getUsernames = () => {
    //return array of all usernames
}

module.exports = User;