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
        console.log(`Hello ${this.name}`);
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
            console.log(`Hello ${this.name}`);
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
        console.log(`Hello ${this.name}`);
        
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
        console.log(`Hello $(this.name)`);
        
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
/* 
class Animal{
    constructor(name){
        this.name = name;

    }
    speak(){
        console.log(`${this.name ) makes a noise`);
        
    }
    sing(){
        console.log(`${ this.name } sing a song`);
        
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
 */

// ****Static
/* 
class Animal{
    constructor(name){
        this.name = name;

    }
    speak(){
        console.log(`${this.name ) makes a noise`);
        
    }
    static sing(name){
        console.log(`${name } sing a song`);
        
    }
}

let d = 'Huskey'
Animal.sing(d);
 */
/* 
class Game {
    static score = 0;

    constructor(){
        this.isPlaying = false;
    }
    start(){
        this.isPlaying =true;
        console.log('this game is strated');
        
    }
    end(){
        this.isPlaying = false;
        console.log('this game has ended');
        Game.updatedScore()
    }
    static updatedScore(){
        Game.score++;
        console.log(`score : ${Game.score}`);
        
    }
}

const game = new Game();
game.start();
game.end();
game.end();
game.end();
game.end();
game.end();
 */

// ****Access Modifiers (Public and Private)

/* 
class BankAccount {
    #balance =0;

    deposite(amount){
        this.#balance += amount;
        console.log(`Deposited ${amount},
            new balance is ${this.#balance}`);
        
    }
    withdraw(amount){
        if(amount > this.#balance){
            console.log('insufficient funds');
            
        }
        else{
            this.#balance -= amount;
            console.log(`Withdraw ${amount},
                new balance is ${this.#balance}`);
        }
    }
    balance(){
        console.log(this.#balance);
        
    }
}

const account = new BankAccount();


account.deposite(100);

account.withdraw(20);

account.balance();
 */

// **** Try ,Catch and Throw
/* 
function d(a,b){
    try{
        if (b==0){
            throw new Error("Can't devided by 0");
        }
        else{
            console.log(a/b);
        }
    }
    catch(err){
        console.log(err.message);
    }
}

d(10,0);
 */

// **** Fetch data from APi

fetch('https://jsonplaceholder.typicode.com/posts')
.then(response =>
    {
    if(!response.ok){
        throw new Error('Network is not responding')
    }
    return response.json();
})
.then(data =>data.forEach(element =>{
        console.log(element.title);
        
    }
))
.catch(error => console.error(error));

// ****publish new data in APi

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));

// ****Update data in APi

fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify({
          id: 1,
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));

// ****Delete data in APi 

fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
  });