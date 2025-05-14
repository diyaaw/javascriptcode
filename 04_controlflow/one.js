// = assignment of values (if)
// == checking of equal or not
/// === checks if equal in terms of datatype also
// !== checks for datatype also









// const score=200
// if(score>100){
//     let power="fly"
//     console.log(`user power : ${power}`);
// }
// console.log(`user power : ${power}`)

// var ka scope global hota hai which is not that good isiliye hum
//  let aur const jyda use krte hai


const balance=1000
//  if(balance>500) console.log("test"), console.log("test") ;
// ye bikul bhi acchi practice nhi hoti hai. implicit kehte hai isko

// if (balance<500) {
//     console.log("less than 500");
// }else if(balance<750){
//     console.log("less than 750")
// }else if (balance<900) {
//     console.log("less than 900");
// }else (balance<1200){
//     console.log("less than 1200");
// }

const debitcard=true
const userLoggedIn=true
const loggedInFromGoogle=false
const loggedInfromEmail=true
if(userLoggedIn && debitcard && 2==3 ){
    console.log("allow to buy courses");
}
if(loggedInFromGoogle || loggedInfromEmail){
    console.log("user logged in");
}