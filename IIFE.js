//Immediately invoked function expressions (IIFE)

(function chai(){
    console.log('DB CONNECTED');
}())
//gLOBAL SCOPE KE POLLUTION SE PROBLEM HOTI HE THAT'S WHY WE USE IIFE



(function chai(){
    //Named IIFE
    console.log(`DB CONNECTED TWO`);

})();

(() => {
    console.log(`DB CONNECTED TWO' ${name}`);
}) ()



