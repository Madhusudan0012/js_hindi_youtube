const name = "Madhusudan"
const repoCount = 50

// console.log(name + repCount )

console.log("The boiii Madhusudan ");

const gameName = new String('Madhusudan singh chauhan')
// console.log(gameName[0]);
// console.log(gameName.__proto__.);

// console.log(gameName.length )

console.log(gameName.toUpperCase());
console.log(gameName.charAt('2'));

//Learn more about methods of javascript 
//Strings method is most important
const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8,4);
//if you giving negative value than it start with reverse
console.log(anotherString);

//Trim and Replace 
const newStringOne = "             Madhusudan Singh Chauhan"

console.log(newStringOne);
console.log(newStringOne.trim());


//Replace 
const url = "https://Madhusudan.com/Madhusudan%20"

// url.replace('%20' , '-');
console.log(url.replace("%20" , '-'));

//Strings can be converted into array 

console.log(gameName)




