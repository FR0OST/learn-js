//for in and for and 

// *********for in 

// let arr=[10,20,30,40];
// for(let ar in arr )
// {
//     console.log(ar);
    
// }
// this will print the index 

// let arr=[10,20,30,40]
// for(let ar in arr )
// {
//     console.log(arr[ar]);
    
// }
// this will print the values in the array

// ******* for of

// for(let ar of arr )
// {
//     console.log(ar);
    
// }

// Multideminsion array

/* let arr =[
    ["John",30],
    ["Thomas",38],
    ["Robert",40]
]
 */
/* console.log(arr);
//  if i want to print only thomas then 

console.log(arr[1][0]);
console.log(arr[1]);


 to print all the values we use for loop 

for (let i = 0; i < arr.length; i++) {
  
    for (let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
        
    }
//   console.log(arr);
  
} 
this will work method is too long */

/* arr.forEach(data => {
    data.forEach(val=>{
        console.log(val);
    })
});

this is the example of for each */

/* for (let ar of arr) {
    for(i of ar){
        console.log(i);
        
    } 
} */

    /* copy and spread an arrary into another array */
/* 
    let arr1 =["john", 2003, true];
    let arr2 =arr1.slice(0).concat(["item"]);
    
    arr2.push("berg");

    console.log(arr1);
    console.log(arr2);

    now this is a good method but there is another method for this*/

    // now this this the example of spead operator
/* 
    let arr1 =["john", 2003, true];
    let arr2 =[...arr1];

    arr2.push("berg");

    console.log(arr1);
    console.log(arr2);

  */

    // array destructuring
   /*  let array1=["Thomas","chad","Neo","Magnus"]
    let [item1,item2,...item3]=array1;

    console.log(item1);
    console.log(item2);
    console.log(item3); */
    

    //***objects */


  /*   let obj ={
        name:"Bravo",
        age:32,
        "last name":"John", 
        //  we need to double collon here because there is a space in the name
        
        fun:function(){
            console.log("i am function"); 
            // function in an object

        },
        arr:[20,30,40,]
    }   */
    /* console.log(obj["last name"]);
    obj.fun();
    console.log(obj.arr);
     */
    /* let a="key2";
    obj.key="item"
    obj[a]="item2" */
    /* 
    console.log(obj);
     */
    // to print all the value of object we use for in loop 

   /*  for( i in obj){
        console.log(obj[i]);
        
    } */
    // we have show this using for in loop 

    /* for ( let i of Object.keys(obj)){
        console.log(obj[i]);
        
    } */

    // this is using for of loop

    // *****************objects inside array

    /* let arr=[
        {user:1,name:"tate"},
        {user:2,name:"anderson"},
        {user:3,name:"bravo"}

    ]
    console.log("this is for the for in loop");
    for (let i in arr){
        console.log(arr[i]);
        
    }    
    console.log("this is for the for of loop");
    
    for( let i of arr){
        console.log(i.name);
        
    }

    //  now destructuring 
    console.log("now this is for the destructuring part");

    let [{name}, ,{name:name2}]= arr; 
    // we need to change the name to name2 using colon because name is aleady taken for the item1
    console.log(name);
    console.log(name2); */
     

// ****************functions inside funstion


/* function fun(){
    console.log("i am function 1");
    function fun2(){
        console.log("i am function2");
        
    }
    fun2();
}    
fun(); */

// *******LEXICAL SCOPE

/* function fun(){
    var a=1;
    console.log("i am function ;"+ a);
    function fun2(){
        var a=2
        console.log("i am function ;"+ a);
        
    }
    fun2();
}

fun(); */

// lexical scope always search for values only upwards not downwards

// ***********Debugger

/*  function fun (){
    debugger;
    for(let i=0;i<5;i++){
        console.log(i);
    }
 }

fun();
 */

// ******sets
/* 
const arr=[10,20,30,40,50,30];
console.log(arr);
console.log(arr.length);


const s=new Set([10,20,30,40,50,30]);
s.add(6)
s.add("hello")
console.log(s);

let length=0;
for(let element of s){
    length++;
}

console.log(length);
 */
// set is similar to array but it does not show repeated values
// always show unique values 

// *******maps

var map1= new Map([[1,"one"],
["fname","mickey"],
["whole number",[0,1,2,3,4]]])
console.log(map1.get("fname"));

var k= map1.keys();
for(var key of k){
    console.log(key);
    
}

console.log(map1);

console.log("this is for map2");

var map2=new Map();
map2.set("fname","mouse")
console.log(map2);
