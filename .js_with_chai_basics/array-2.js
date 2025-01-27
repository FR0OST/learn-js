// const marvel_heroes = ["Thor","Ironman","Spiderman"]
// const dc_heroes = ["Batman","Flash","wonderwomen"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes[3][0]);

// const allheroes = marvel_heroes.concat(dc_heroes)

// console.log(allheroes);

// const all_new_heroes = [...marvel_heroes,...dc_heroes]

// console.log(all_new_heroes);


const another_array = [1, 2 ,3 ,[4 ,5 ,6 ], 7,[6 ,7,[4 ,5]]]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);


console.log(Array.isArray("Pritam"));
console.log(Array.from("Pritam"));

const arr1 =["pritam"]
const arr2 =["sundria"]
console.log(...arr1,arr2);


console.log(Array.from({name:"pritam"}));
// this will give us an empty array as it is not defined value or key in the array

let score = 200
let score2 = 300
let score3 = 400 

console.log(Array.of(score,score2,score3));
