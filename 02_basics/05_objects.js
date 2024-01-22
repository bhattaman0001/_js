const course = {
  courseName: "js in hindi",
  courseInstructor: "hitesh sir",
  coursePrice: "0",
};

// console.log(course.courseInstructor)
// but another way of doing it

// const {courseInstructor} = course
// console.log(courseInstructor)

// also
const { courseInstructor: instructor } = course; // this is called destructuring the object
console.log(instructor);