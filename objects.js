// //singleton
// //object litterals 
// //object.create
// // object 

// const mySym = Symbol("Madhusudan")
// const JsUser = {
//     name :"Madhusudan Singh Chauhan",
//     [mySym]: "myKey1",
//     age : 10 ,
//     location : "google",
//     postion : "SDE 1",
//     Last_Login : ["Monday"],
//     email : "madhusudanchauhan62@gamil.com",
// }
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser.location)
// console.log(JsUser[mySym])

// JsUser.emaili = "MadhusudanChauhan@gmail.com"

// // Object.freeze(email)


// JsUser.greeting = function(){
//     console.log("Hello JS User");

// }

// console.log(JsUser.greeting());

// JsUser.greetingTwo = function(){
//     console.log('Hello JS user , ${this.name}');

// }

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());


//***********Part 2************ */

// const tinderUser = new Object()
// const tinderUser = {}//non singleton object
// tinderUser.id = "123abc"
// tinderUser.name = "Madhusudan"
// tinderUser.isLoggedIn = false

// console.log(tinderUser);

// const regularUser = {
//     email:"some@gmail.com",
//     fullname: {
//         userfullname:{
//             firstname:  "Madhusudan",
//                 lastname: "chauhan"
//             }
//         }
//     }
// console.log(regularUser.fullname?.firstname);


// const obj1 = {1: "a" , 2: "b"}
// const obj2 = {3: "a" , 4: "b"}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign(obj1 , obj2)
// const obj3 = Object.assign({} , obj1 , obj2)
// console.log(obj3);

//same as array
const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a" , 4: "b"}
const obj4 = {5: "a" , 6: "b"}

const obj3 = {...obj1,...obj2}
console.log(obj3);

