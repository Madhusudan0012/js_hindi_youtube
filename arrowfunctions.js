const user = {
    username: "Madhusudan Singh Chauhan",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username} , Welcome to website` );
        //This is used for current context..


    }
}

user.welcomeMessage()

user.username = "Ankit Boss"
user.welcomeMessage()


console.log(this) //output empty but when you run same code in the chrome you get output of window

//Arrow Function 

// function chai(){
//     let user = "Madhusudan"
//     console.log(this)
// }

// chai()

//Arrow Function

const chai = () => {
    let username = "Madhusudan Singh Chauhan"
    console.log(this.username);

}

chai()


//chai()

// const addTwo = (num1 , num2 ) =>{
//     return num1 + num2
// }

// console.log(addTwo(3,4))




//Implit  Return 
const addTwo = (num1 ,num2) =>  num1 + num2

console.log(addTwo(3,4))

//Explit return 

// const addTwo = (num1,  num2 ) => {username: "Madhusudan"}

console.log(addTwo(4,5))

// const myArray = {2,5,6,7,8}

// MimeTypeArray.forEach() => 

