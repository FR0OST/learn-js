const name ="Name"
const repoCount = 50


// console.log(name + repoCount + " value");

// console.log(`Helo my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('string-name')

console.log(gameName[7]);
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('n'));


 const newString= gameName.substring(0,4)
 console.log(newString);

 const anotherString = gameName.slice(-8 ,6)
 
console.log(anotherString);

const newStringOne = "      trim      "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://www.myname.com/google%20alphabat"

console.log(url.replace('%20','-'))
console.log(url.includes('google'));
console.log(url.includes('pritam'));

console.log(gameName.split('-'));
