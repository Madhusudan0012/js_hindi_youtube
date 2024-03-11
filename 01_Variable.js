const accountId = 1444553
let accountEmail = "madhusudanchauhan@gmail.com" //scope variable 
var accountPassward = "12345" //scope problem 

accountcity = "Agra"
// accountId = 2 not allowed 

accountEmail = "madh@gamil.com"
accountPassward = "167163823"
accountcity = "Mathura"

{
    //scope variable 
    //intial days me javascript scope par kaam nhi karte 
}
console.log(accountId);
console.table([accountEmail, accountPassward, accountcity, accountId])

/*
Prefered not to use var 
because of issue in block scope and functional scope 

*/
