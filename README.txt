User structure:

User = {string: username, string: password, string: first, string: last, string: email, string[]: stocks}

--------------------
Basic HTTP requests:
--------------------

--------GET---------

const result = await axios({
  method: 'get',
  url: 'https://stockr-426.herokuapp.com/user'
});

Returns a response containing an array of all valid usernames stored on the remote disk.


const result = await axios({
  method: 'get',
  url: 'https://stockr-426.herokuapp.com/user/<USERNAME>'
});

Returns a response containing the information stored for the given user.
404 error if user doesn't exist.

--------POST--------

const result = await axios({
  method: 'post',
  url: 'https://stockr-426.herokuapp.com/user',
  data: {
    username: "<USERNAME>",
    pass: "<PASS>",
    first: "<FIRST>",
    last: "<LAST>",
    email: "<EMAIL>"
  }
});

Returns a response containing the posted user object.
500 error if username is already taken.

--------PUT---------

const result = await axios({
  method: 'put',
  url: 'https://stockr-426.herokuapp.com/user/<USERNAME>',
  data: {
    action: "push",
    stock: "<STOCK>"
  }
});

Returns a response containing the edited user object with stock added to their stocks array.
500 error if user is already following the stock.

const result = await axios({
  method: 'put',
  url: 'https://stockr-426.herokuapp.com/user/<USERNAME>',
  data: {
    action: "destroy",
    stock: "<STOCK>"
  }
});

Returns a response containing the edited user object with stock removed from their stocks array.
404 error if user is not following the stock.
