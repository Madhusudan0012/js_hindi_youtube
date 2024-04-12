// const coding = ["js" , "ruby" , "java" , "python", "cpp"]

// const values = coding.forEach((item)=>{
//     // console.log(item)
//     return item
// })

// // console.log(values);

//  const myNums = [1,2,3,4,5,6,7,8,9,10]

// // const newNums = myNums.filter( (num) =>  {
// //   return  num> 4
// // })
// // console.log(newNums);
// //Basics of Filter 

// //Empty kese aya yee


// // const newNums =[] 

// // myNums.forEach((num) => {
// //     if(num >4){
// //         newNums.push(num)
// //     }
// // })

// // console.log(newNums);

// const books = [
//     {title : 'Books one ' , genre : 'fiction' , publish: 1981, edition:2004},
//     {title : 'Books two ' , genre : 'fiction' , publish: 1951, edition:2005},
//     {title : 'Books  three' , genre : 'fiction' , publish: 1931, edition:2005},
//     {title : 'Books four' , genre : 'History' , publish: 1931, edition:2008},
//     {title : 'Books five ' , genre : 'fiction' , publish: 1481, edition:2004},
//     {title : 'Books six ' , genre : 'fiction' , publish: 1991, edition:2002},
//     {title : 'Books seven ' , genre : 'fiction' , publish: 1921, edition:2004},
    
// ];

// //User 
// let  userBooks = books.filter((bk) => bk.genre === 'History')

//    userBooks = books.filter((bk) => { return bk.publish >= 2009}) ///SCope open  kar diya he 


// console.log(userBooks);

// //*************Next Method */
// const myNumbers = [1,2,4,5,6,7,8,9]



//    const  newNums = myNumbers.map((num) => num +10)
//    console.log(newNums);


//ForEach is very Useful loop 

//Filter 
//   newNums = myNumers.map((num) => num*10)

// console.log(newNums);
const myNumers = [12,2,5,6,7,7,8,8]
const newNums= myNumers
            .map((num) => num*10)
            .map((num) >= num+1 )

            console.log(newNums);

 