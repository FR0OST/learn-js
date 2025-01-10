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
/* 
function fact (n){
    if (n==0){
        return 1;
    }
    else{
        return n*fact(n-1);
    }
}

console.log(fact(5));
 */

// ****Asychronous and synchronous and set timeout
/* 
console.log("this is");
setTimeout(() => {
    console.log("asynchronous");
}, 4000);

setTimeout(fun,3000)

function fun(){
    console.log("and this is");
    
}


console.log("synchronous"); */

// the code will run in a sequence one the 1st code execute
// and finish then next code execute
// and for asynchronous we have to set out

// ****callback
/* 
function fun(val){
    console.log(val);
    
}

function add(a,b,callbk){
    let sum=a+b;
    callbk(sum)
}

add(5,10,fun)
 */

// ****callback hell
/* 
function loadingdata(callback){
    setTimeout(()=>{
        console.log("1) loading data....");
        callback();
    },2000)
    
    
}
function connectingdata(callback){
    setTimeout(()=>{
    console.log("2) collecting data...");
        callback();
},2000)
   
    
}
function approvingdata(callback){
    setTimeout(()=>{
        console.log("3) approvingdata...");
        callback();
    },2000)
    
    
}
function approved(){
    setTimeout(()=>{
        console.log("4) approved...");
    },2000)
    
    
}
// this is callback hell 
loadingdata(function(){
    connectingdata(function(){
        approvingdata(function (){
            approved();
        });
        
    });
    
});
 */
//**** promise
/* 
function fun(task){
    return new Promise((resolve,reject)=>{
        if(task){
            resolve("completed");
        }
        else {
            reject("rejected");
        };
    })

}

let onResolve=(res)=>{
    console.log(res);
    
}

let onReject=(rej)=>{
    console.log(rej);
    
}

fun(true).then(onResolve).catch(onReject); */

// now we will apply promise function in the above program of callback hell
/* 
function loadingdata(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("1) loading data....");
            resolve();
        },1000)
        
    })
    
}
function connectingdata(){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            console.log("2) collecting data...");
            resolve();
        },1000)
    })
    
   
    
}
function approvingdata(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("3) approvingdata...");
            reject("Not fulfilled");
        },1000)
        
    })
    
    
}
function approved(){
        setTimeout(()=>{
            console.log("4) approved...");
        },1000)
        
    }

loadingdata().then(connectingdata).then(approvingdata).then(approved)
.catch((err)=>{
    console.log(err);
    
}) */

// ****Async await

/* 
function loadingdata(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("1) loading data....");
            resolve();
        },1000)
        
    })
    
}
function connectingdata(){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            console.log("2) collecting data...");
            resolve();
        },1000)
    })
    
   
    
}
function approvingdata(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("3) approvingdata...");
            reject("Not fulfilled");
        },1000)
        
    })
    
    
}
function approved(){
        setTimeout(()=>{
            console.log("4) approved...");
        },1000)
        
    }


async function ex (){
    await loadingdata();
    await connectingdata();
    await approvingdata();
    await approved();

}

ex().catch((err)=>{
    console.log(err);
    
});

 */

// setinterval

/* 
var inter = setInterval(fun,1000);

function fun(){
let date= new Date().toLocaleTimeString();
console.log(date);

}

setTimeout(()=>{
    clearInterval(inter);
    },20000) */

// ****

function fun(age,gender){
    console.log(this.fname,age,gender);
}

var obj1={
    fname:"John",
}

var obj2={
    fname:"kenny"
}

fun.call(obj1,12,"male"); 

fun.apply(obj1,[12,"male"]);

var a= fun.bind(obj1,[12,"male"]);
console.log(a);

console.log(typeof a);

