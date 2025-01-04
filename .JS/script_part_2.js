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

let arr =[
    ["John",30],
    ["Thomas",38],
    ["Robert",40]
]

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
    let array=["Thomas","chad"]
    let item1=array1[0];
    let item2=array1[1];

    console.log(item1);
    console.log(item2);
    
