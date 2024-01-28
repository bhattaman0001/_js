class user {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }
  // making getter and setter for the properties,
  // name of the functions are same as properties
  get username() {
    return this._username.toUpperCase();
  }

  set username(value) {
    this._username = value;
  }

  get email() {
    return this._email.toUpperCase();
  }

  set email(value) {
    this._email = value;
  }
}

const user1 = new user("aman", "aman@bhatt.com");
console.log(user1.username, user1.email);
