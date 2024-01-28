// functions is also an object
function User(username, email) {
  this._username = username;
  this._email = email;

  Object.defineProperty(this, "email", {
    get: function () {
      return this._email;
    },
    set: function (value) {
      this._email = value;
    },
  });

  Object.defineProperty(this, "username", {
    get: function () {
      return this._username;
    },
    set: function (value) {
      this._username = value;
    },
  });
}

// always use new keyword
const user1 = new User("aman", "aman@bhatt.com");
console.log(user1.email, user1.username);
