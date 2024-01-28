class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    return `Username: ${this.username}`;
  }

  // to not give access to instances of User, use static keyword
  static printId() {
    return `${this.username}__`;
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    // using super
    super(username); // this super automatically takes the this reference of this class
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`a course is added by ${this.username}`);
  }
}

const teacher1 = new Teacher("aman", "aman@bhatt.com", "abc");
teacher1.addCourse();

// // naya comparison is instance of
// console.log(teacher1 instanceof Teacher); // true
// console.log(teacher1 instanceof User); // true
// console.log(User === Teacher); // false

// static keyword in printId
console.log(teacher1.logMe());
// console.log(teacher1.printId()) // o/p is error
const user1 = new User("Aman");
console.log(user1.logMe());
// console.log(user1.printId()) // o/p is error
