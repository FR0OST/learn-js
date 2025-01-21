// ****destructuring

const course ={
    coursename: "js in hindi",
    price:"999",
    courseInstruction: "Mentor"
}
// course.courseInstruction

const {courseInstruction: instructor} = course
console.log(instructor);

/*
 {
    "name":"cohrot",
    "coursename":"js in hindi",
    "price":"free"
} 
*/

[
    {},
    {},
    {}
]