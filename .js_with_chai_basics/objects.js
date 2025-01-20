//  singleton->constructor->object.create

// object literals 

const mySym = Symbol("key1")

const JsUser = {
    name:"Pritam",
    "full name":"Pritam Sundria",
    age: 22,
    location:"Chandigarh",
    Email:"myemail@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Mon","Tue","Wed"],
    [mySym]: "mykey1"
}
/* 
console.log(JsUser.Email);
console.log(JsUser["location"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);
console.log(typeof [mySym]);


JsUser.Email = "newemail@gmail.com"
console.log(JsUser["Email"]);
// Object.freeze(JsUser)
// now we can not change the value of the object
JsUser.Email = "newemail@outlook.com"
//console.log(JsUser);
 */
JsUser.greeting = function(){
    console.log(`Hello ${this.name} welcome to my code`);
}

JsUser.greeting()
