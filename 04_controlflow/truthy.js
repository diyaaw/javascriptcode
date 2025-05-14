const useremail = []

// if(useremail){
//     console.log("got user email");

// }else{
//     console.log("dont have user email");
// }






// falsy values
// fase, 0,-0, bigInt 0n, "" , null , undefined , NaN

// truthy values
// "0" , "false" , " " , "anything iske andr", 'anything iske andr',
//  {} empty object hai ye ,
//  [] empty srray , function(){} empty function


 false == 0// true ayega
 false == '' // true
 0 == '' // true

if(useremail.length === 0 ){
   // console.log("Array is empty");
}

const emptyobj={}
if(Object.keys(emptyobj).length === 0 ){
   // console.log("khali haii object")
}

///Nullish coalescing operator(??) : null aur undefined ke liye 
let val1;
val1 = 5??10
val2 = null??5
val3 = undefined??45??67??2??78
// console.log(val3);

// Ternery operator 
// condition ? true :false
const iceteaprice= 100
iceteaprice<= 80 ? console.log("less than 80") : console.log("more than 80");