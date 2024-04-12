// //for of 
// ["" , "" , ""]
// [{}, {} , {}]

// const arr = [1,2,3,4,5]


// for(const num of  arr) {
//     console.log(num);


// }

// const greetings  = "hello world!"
// for(const greet of greetings){
//     console.log(`Each char is ${greet}`)
// }

// //Maps 

// const map = new Map()
// map.set('IN', 'INDIA')
// map.set('USA' , "Unites state of america")
// map.set('Fr' , "france")
// // map.set('IN' , "INDIA")


// // console.log(map);


// // for(const key of map ){
// //     console.log(key , ':-' , value);
// // }

// // const myObject = {
// //     'game1' : 'NFS' , 
// //     'game2' : 'freeFire'
// // }

// // for(const [ ley , value] of myObject){
// //     console.log(key , ':-' , value);

// // }

// const myObject = {
//     js : 'javascript',
//     cpp : 'C++',
//     rb : "Ruby",
//     swift: "swift by apple"

// }

// for(const key in myObject){
//     console.log(`${key} shortcut is for ${myObject[key]}`) ;
// }

// const programming = ["js" , "rb" , "py" , "java" , "cpp"]

// for(const key in programming){
//     console.log(programming([key]))

// } 


// const map = new Map()
// map.set('IN', 'INDIA')
// map.set('USA' , "Unites state of america")
// map.set('Fr' , "france")
// map.set('IN' , "INDIA")


// for(const key in map){
//     console.log(key);
// }

//Map ki ducumentation padhna 

const coding = ["js" , "C++" , "Python " , "cpp"]

// coding.forEach(function (val) {
//     console.log(val);


// } )


// coding.forEach( (item) => {
//     console.log(item);

// }
// )

// function printMe(item){
//     console.log(item);

// }

// coding.forEach(printMe)

// coding.forEach((item , index , arr) => {
//     console.log(item , index , arr);

// })

const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "python",
        languageFilename : "py"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName);
    
})