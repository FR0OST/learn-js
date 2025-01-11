// ****property flags and descriptor
/* 
let emp={};
emp.name="john";

console.log(Object.getOwnPropertyDescriptor(emp,"name"));

Object.defineProperty(emp,"age",{
    value:21,
    writable:true,
    // if false we can not change the value at all age will remain 21
    configurable:true,
    // if false we can not delete the value 
    enumerable:true
    // if false we can not read it through loop or anything

});
emp.age=20;
// delete emp.age;
for(let k in emp){
    console.log(k);
    
}
console.log(emp);

console.log(Object.getOwnPropertyDescriptor(emp,"age"));

 */

// ****Proto  [[prototype]]= __proto__=Object.create
/* 
let obj ={
    fname:"john",

};

let obj2 ={
    lname:"smith",

};

obj2.__proto__ = obj;
console.log(obj2);

obj3 = Object.create(obj);
obj3.lname="cena"
console.log(obj3);
 */
// ****Prototype
/* 
function Person(name,age){
this.name = name;
this.age = age;
}

Person.prototype.greet= function(){
        console.log('Hello ${this.name}');
    }

let user =new Person ("John",18)
user.greet()
console.log(user);

 */

// ****Class  

// (same code but small)
/* function Person(name,age){
    this.name = name;
    this.age = age;
    }
    
    Person.prototype.greet= function(){
            console.log('Hello ${this.name}');
        }
    
    let user =new Person ("John",18)
    user.greet()
    console.log(user);

 */

/* class Person {
    constructor(name,age){
        this.name =name;
        this.age = age;
    }
    greet(){
        console.log('Hello ${this.name}');
        
    }
    }

let user =new Person ("John",18)
user.greet()
console.log(user);

 */
/* 
class User {
    constructor(name){
        this.name = name;
    }
    sayHi(){
        console.log("Hello "+ this.name);
        
    }
}

let user = new User ("John")
user.sayHi();
let user1 = new User ("Tate")
user1.sayHi();
let user2 = new User ("Deep")
user2.sayHi();

console.log(typeof User);
 */

// ****Inheritance

class Animal{
    constructor(name){
        this.name = name;

    }
    speak(){
        console.log('${this.name ) makes a noise');
        
    }
    sing(){
        console.log('${ this.name } sing a song');
        
    }
}

class Dog extends Animal{
    constructor(name){
        super(name);

    }
}

class Cat extends Animal{
    constructor(name){
        super(name);

    }
}

let d = new Dog ('rufus')
d.speak();

let e = new Cat ('billi')
d.sing();