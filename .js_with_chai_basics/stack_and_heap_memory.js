//  ****Memory -> Stack and Heap 

// Stack -> Primitive (copy of the orignal value), Heap -> Non Premitive (reference of the orignal value)
// Stack


let myYoutubename = "myYoutubedot.com"

let anothername = myYoutubename
anothername = "newYoutube"

console.log(anothername);
console.log(myYoutubename);

// Heap


let userOne ={
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo= userOne
userTwo.email = "newuseremail@gmail.com"


console.log(userOne.email);
console.log(userTwo.email);