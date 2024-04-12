// // // function jaddu(){
// // //     console.log("Madhusudan Singh Chauhan: HandSomeBoii");

// // // }
// // // jaddu();

// //  function Add2Numbers(nums1 , nums2 ){
// // //    console.log(nums1 + nums2)
// // let result  = nums1 + nums2
// // console.log("Madhusudan");
// // return result
// // // console.log("Madhusudan");


// // }
// // // Add2Numbers(3,4);

// // const result = Add2Numbers(2,5)

// // console.log("result:" , result );


// // function loginUserMessage(username){
// //     if(username === undefined ){
// //         console.log("Please enter a username");
// //         return

// //     }
// //     // return '${username} just logged in'
// // }

// // console.log(loginUserMessage(""))



// function loginUserMessage(username = "sam"){
//     if(!username){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} 'just logged in`
// }

// console.log(loginUserMessage("Madhusudan singh chuahan"))


// //************ part 2 ******************//

function calculateCartPrice(val1 , val2 ,...num1){
    //... Rest Operator 
    return num1
}

console.log(calculateCartPrice(200, 200 , 400));


//Objects 

const user = {
    username : "Madhusudan singh chauhan",
    prices : 999
}

function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleobject(user)

handleobject({
    username: "Madhusudan Singh Chauhan",
    price: 399
})

const myNewArray = [200 , 400 , 100 , 600]

function returnSecondValue(getArray){
    return getArray[1]

}
console.log(returnSecondValue(myNewArray));


