
 function sayMyname(){
    console.log("P");
    console.log("r");
    console.log("i");
    console.log("t");
    console.log("a");
    console.log("m");

 }

//  sayMyname()


function addTwonumbers(number1, number2){
    console.log(number1 + number2);
    
}

const result = addTwonumbers(2,3)
// console.log("Result: ", result);

function addTwonumbers1(number3, number4){
    // let result = number3 + number4
    // return result;
    // console.log("pritam");
    // we can not print anything after return command return is the last command
    return number3 + number4
}

const result1 = addTwonumbers1(3,6)

// console.log("Reasult 1: ",result1);

function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Pritam"));
console.log(loginUserMessage());
