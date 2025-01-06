// ****this
/* 
var obj={
    fname:"john",
    age:"8",
    fun :function(){
        console.log(this.fname);
        
    }
}
obj.fun();

function fun(){
    console.log(this);
}
fun();
 */

// ****new

/* function fun(){
    let fName="john";
    this.fName= fName;
}

var obj =new fun();
console.log(obj.fName);

 */

// ****constructor

/* it is named in capital letters in the code
it will be execute with NEW always nothing new just a regular function*/
/* 
function User(name){
    this.name=name;

}
let person = new User("jakle");
console.log(person.name);
 */

// we can use NEW with the help of loop

/* function User(name){
    if(!new.target){
        return new User(name);
    }
    this.name=name;

}
let person = new User("jakle");
console.log(person.name);
 */

// ****symbol

/* let sym=Symbol("id");
let sym1=Symbol("id")
console.log(sym.description);
console.log(sym.toString());
console.log(sym ===sym1);

let id=Symbol("id");
let obj={
    name:"john",
    age:20
    // [id]:1
}
obj[id]=1;
console.log(obj.name);
console.log(obj[id]);
console.log(obj);

for (let key in obj){
    console.log(key);
    
} */

// ****recursion

/* for(let i=0;i<=10;i++){
    console.log(i);
    
} */
/* 
function printNumberRecusion(n){
    if(n<=10){
        console.log(n);
        printNumberRecusion(n+1)
    }
}

printNumberRecusion(1); */

