// immediately invoked function expressions(IIFE)
 
// kai baar global scope ke variable se polution hota hai 
// usse hatane ke liye humne iife use kia

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`)

})();
//we will need an ; to end my function otherwise error will come  

//()();// pehla wala definition dusra wala execution
//aur ek bahar lagana haii kyuki parenthesis se 
( (name) => {
    //unnamed iife dont forget semicolon
console.log(`DB CONNECTED TWO ${name}`);
})(`diya`)