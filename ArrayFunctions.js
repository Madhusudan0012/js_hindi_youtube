const marvel_heros = ["thor" , "Ironman" , "Spiderman"]
const dc_heroes = ["Superman"  , "flash" , "batman" ]

marvel_heros.push(dc_heroes)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);
 const allheroes = marvel_heros.concat(dc_heroes)
console.log(allheroes);

//concat 

const all_new_heros = [...marvel_heros , ...dc_heroes]

console.log(all_new_heros);


const another_array = [1,2,3,4,5,[,4,5,6],[6,7,[4,5]]]

const real_array = another_array.flat(Infinity);

console.log(real_array)

console.log(Array.isArray("Madhusudan Singh Chauhan"));
console.log(Array.from("Madhusudan Singh Chauhan"));
console.log(Array.from({name: "Madhusudan"}))

//interresting case for interview 

//Keys se Array banayi 

//Example 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1 , score2 , score3 ));