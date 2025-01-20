// singleton-> const tinderUser = new Object()
// non singleton-> const tinderUser = {}

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = "false"

// console.log(tinderUser);


const regularUser ={
    email: "useremail@email.com",
    "full name" : {
        userfullname:{
            firstname:"fname",
            lastname:"lname",
        }
    }

}

// console.log(regularUser["full name"].userfullname.firstname);


const Obj1 ={1: "a", 2: "b"}
const Obj2 ={3: "a", 4: "b"}
const Obj3 ={5: "a", 6: "b"}


// const Obj4 = {Obj1,Obj2,Obj3}
// const Obj4 = Object.assign({}, Obj1,Obj2,Obj3)

const Obj4 = {...Obj1,...Obj2,...Obj3}

// console.log(Obj4);

const Users = [
    {
        id:1,
        email:"user@email.com"
    },
    {
        id:1,
        email:"user@email.com"
    },
    {
        id:1,
        email:"user@email.com"
    },
    {
        id:1,
        email:"user@email.com"
    },
]

Users[2].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("isLoggedIn"));
