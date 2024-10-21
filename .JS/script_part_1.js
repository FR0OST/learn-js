// ***************************************COMPLETE .JS*****************************************

// //console.log("Hello")
// // hello this is tutorial

// let  myName="Pritam";
// let a =  myName;
// console.log(a);

// let b = 5
// console.log(b);

// let c = "Hello"
// console.log(c);


// //****now we will see the diff b/w var,cont,let***

// var name = "itachi"
// var name = "sauske"
// console.log(name);

// let name2 = "itachi"
// name2 = "sauske"
// console.log(name2);

// const name3 = "itachi"
// const name4 = "sauske"
// console.log(name3,name4);



// // **********data type************


// // A-Primitive Datatype

// // 1.Number
// let num=50;
// console.log(typeof num);

// // 2.String
// let str="Hello";
// console.log(typeof str);

// // 3.Boolean
// let bool=true;
// console.log(typeof bool);

// // 4.null
// let a1=null;
// console.log(a1);
// console.log(typeof a1);
// //*****null is a defined as object in js so be carefull

// // 5.underfined
// let a2;
// console.log(a2);
// console.log(typeof a2);


// // B-Non Premitive 

// // 1.Objective
// // 2.array
// // 3.

// // **discuss later

//*************conversion*************/

// result='3'+2;
// console.log(result);
// console.log(typeof result);

// result1='3'+ 'hello';
// console.log(result1);
// console.log(typeof result1);

// result2='3'-2;
// console.log(result2);
// console.log(typeof result2);

// result3='3'-'hello';
// console.log(result3);
// console.log(typeof 3);

// result4='3'-true;
// console.log(result4);
// console.log(typeof 4);

// result5='3'-null;
// console.log(result5);
// console.log(typeof 5);

// ***we need to fix this to avoid confusion***

// result= null;
// result=String(result);
// console.log(result);
// console.log(typeof result);

// result= null;
// result=Number(result);
// console.log(result);
// console.log(typeof result);

// result= 20.45687;
// result=parseInt(result);
// console.log(result);
// console.log(typeof result);

// result= 20.23546;
// result=parseFloat(result);
// console.log(result);
// console.log(typeof result);


// *************Operators**************
//*********Airthmetic Operator*******

// Addition
// console.log(2 + 5);
// console.log(2 - 5);
// console.log(2 * 5);
// console.log(2 / 5);
// console.log(2 % 5);
// console.log(2 ** 5);

//*******Incement & Decrement Operator*******
// let a=1;
// console.log(a++); /*not effect value 1*/

// // but the value will change for these either by adding to 1 or subtracting to 1 

// let b=1;
// console.log(++b);

// let c=1;
// c--
// console.log(c);

// let d=1;
// d=--d
// console.log(d);

// post fix and prefix

// let a=1;
// console.log(a++);
// console.log(a);

// let a=1;
// console.log(++a);
// console.log(a);

// *****Comparision Operator******

// a=4
// b=6
// console.log(a==b);
// console.log(a!=b);
// console.log(a>b);
// console.log(a<b);
// console.log(a>=b);
// console.log(a<=b);

// a="6";
// b=6
// console.log(a===b);
// console.log(a!==b);

// a=true ;
// b=1;
// console.log(a===b);
// console.log(a!==b);

// **********Logical Operator*********

// 1 Logical OR,AND & NOT
// console.log(2>3 || 3>4);
// console.log(2<3 || 3>4);
// console.log(2<3 || 3<4);

// console.log(2>3 && 3>4);
// console.log(2>3 && 3<4);
// console.log(2<3 && 3<4);

// console.log(!true);
// console.log(!false);


// *********************Conditional Statement***********************

// let age=18;
// let name="jon";


// if(age>=18){
//     if (name=="john"){
//     console.log("You are eligible");
//     }
//     else {
//         console.log("Name is not in our list so, you are not eligible");
//     }

// }
// else
// {
// console.log("you are not eligible");
// }

// let a = 10;
// let b = 14;

// if (a>b){
//     console.log("a is grater than b");
// }
// else if(a<b) {
//     console.log("b is greater than a ");
// }
// else{
//     console.log("Both are equal");
// }

// ***********Switch************

// let ch=1;

// switch (ch) {
// case 1: 
//     console.log("I m 1");
// case 2: 
//     console.log("I m 2");
// case 3: 
//     console.log("I m 3");
// } 
// this will log all the the values not the particular one


// let ch=5;

// switch (ch) {
// case 1: 
//     console.log("I m 1");
//     break;
// case 2: 
//     console.log("I m 2");
//     break;
// case 3: 
//     console.log("I m 3");
//     break;
// default:
//     console.log("you pressed wrong choice");
//     break;
// }

// this will display one the particular value if it is given other wise will 
// give me the default value that is give

// *****************Loops*******************

// ****For Loops

// for(var i=0; i<=10;i++){
//     console.log(i);
// }

// now for tables 
// for(var i=1;i<=10;i++){
//     console.log("2 X " +i+ " = " +2*i);
// }

// another way with backticks

// for (var i=1;i<=10;i++)
//     console.log(`2 X ${i} = ${2*i}`);

// ********While Loop

// var i=1;
// while(i<=10)
// {
//     console.log(`2 X ${i} = ${2*i}`);
//     i++;
// }

// ********DoWhile Loop

// var i=1;
// do {
//     console.log(`2 X ${i} = ${2*i}`);
//     i++;

// } while (i<=10);

// ***********************Function*********************

// function name(a){
//     console.log("Hello " +a);
// }

// name("Learners");

// function add (a,b){
//     console.log(a+b);
// }

// let x=2
// let y=3
// add(x,y)

// function add (a,b,c){
//     return a+b+c;
// }

// let x=2
// let y=3
// let addition=add(x,y,20);
// console.log(addition); 

// let a=5; //Global-will work anywhere

// function local (){

//     let b=3; //local-will only work inside this fuction

//    console.log(b);
// }
// local();
// console.log(a);

// ********Types Of Function

// ****Immediate invoke function

// let fun= function (){
//     console.log("Hello");
// }

// fun();

// let fun1= function (){
//     console.log("Hello");
// }();

// *******Arrow function

// let a= function(a,b){
//     return a+b;
// }

// console.log(a(2,3));

// in this we can write the above code into the below code with arrow

// let a= (a,b)=>{
//     return a+b;
// }

// console.log(a(2,3));

// to write in a more simplified way we can write it as below

// let a =(a,b)=>console.log(a+b);

// a(2,3);

// **********************Array***********************

// let name=["john",1,true,null];
// name.push("cena");
// name.unshift("lesner");
// name.splice(2*,0,"cena");
// console.log(name);
  
// let num=[10,20,35,19,45,60];

// the below examples are from the above statements

// for(let i=0;i<num.length;i++)
// {
//     console.log(num[i]);
// }

// alternative****

// num.forEach((val,index,array) => {
//     console.log(val+" "+array+" "+index);
// });

// we can take them indiviadually as but index will always come in second place 
// no matter what name you take for the index 

// num.forEach((array) => {
//     console.log(array);
// });

// num.forEach((array,ind) => {
//     console.log(ind);

// });

// console.log();


// let a= num.map((val, ind) => {
//     return val+10;
// });
// console.log(num);
// console.log(a);

// let num2 =[11,22,31,51,41,61]

// console.log(num.concat(num2));
// to add an array with another array

// console.log(num.indexOf(20));
// to find the index we use the above

// console.log(num.reverse(num));
// used to revese the array

// let a=num.slice(1,4);

// console.log(a);
// used to sort in ace. or dec. order

// let a=num.splice(1,4);

// console.log(a);

// cut the first and last value of a series


// console.log(num.toString());
// to display a series in a noraml way and the type will be string

// let a =num.filter((val,ind,arr)=>{
//     if(val>=10 && val<=25){
//         return val;
//     }
// })
// console.log(a)

// filter the values 

// let a =num.findIndex((val)=>{
//         return val==10
//     })
// console.log(a)

let num = '10,20,30'

let arr=num.split(',');
arr.forEach(element => {
    console.log(element);
    
});

// display the arry with fully split in each line 

// we can look up for array with the simple log code

console.log(arr);

// so if we want to join it back the here is the simple code

let jo = arr.join(",")
console.log(jo);

