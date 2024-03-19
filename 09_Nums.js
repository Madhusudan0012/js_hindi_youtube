// // const score = 400
// // console.log(score)

// // const balance = new Number(100)
// // console.log(balance);

// // console.log(balance.toString());
// // console.log(balance.toFixed(1));

// // const otherNumber = 23.890

// // console.log(otherNumber.toPrecision(3));

// // const hundreds = 1000000

// // console.log(hundreds.tolocalsString('en-IN'));

// // //************Maths***************** */

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(6.7));
// console.log(Math.max(4,3,5,6,8,9));
// console.log((Math.random()*10)+ 1);

// const min = 10 
// const max = 20

// console.log(Math.floor(Math.random() * (max-min +1 )) + min )


// //********** Date and Time Concepts ******************* */

//Dates 

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.getHours());
console.log(typeof myDate);


// let myCreatedDate = new Date(2023 , 0 ,23);
let myCreatedDate = new Date("2023-01-14");
console.log(myCreatedDate.toLocaleString());

//TimeStamp 
let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());





