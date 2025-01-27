function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200,300,400,2000));
 
const user = {
    username: "pritam",
    price: 100

}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} nad price is ${anyobject.price}`);
    
}

// handleObject(user)

handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200,300,400,600]

function returnSecondValue(getArray){
    return getArray[1]

}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200,300,400,600]));
