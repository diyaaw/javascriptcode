// const name="hitesh"
// const repoCount =50


//follow the backticks syntaxxx 
// console.log(name + repoCount + "Value");
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)
//string is an pbject
const gameName =  new String('hiteshhc');// this is a syntax
// console.log(gameName.__proto__)

// console.log(gameName.charAt(2)); // kis index pe konsa character haii 
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
//keval slice main hi negative values le sakte hai
console.log(anotherString);

const newStringOne="    diyaaa    "
console.log(newStringOne)
console.log(newStringOne.trim())
//trim is used to remove the extra spaces in case such as 
//the user leaves a lot of spaces but we do not need to store
//that in database

const url="https://diyaaa.com/diya%24wadhwa"
console.log(url.replace('%24','&'))

//string will help me in backend

console.log(url.includes("diya"))
console.log( );
