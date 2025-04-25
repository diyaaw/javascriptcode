//singleton- when we declare as constructor then it is 
// said to be singleton object

//object literals

// Object.create this is singleton method
//object ke andr key aur values ka chakkar hota hai

const mysym= Symbol("key1")
//we cannot access symbol as normal key value pair in js
//uska data type main problem hojayegi it will given to the 
//user as string therefore we declare symbol type as []
// as then the type will be symbol only
 
 
 const jsuser={
    name:"diya", // system takes the key as strings
    "age":"20",
    location:"Indore",
    email:"diya@google.com",
    isLoggedIn: false,
    [mysym] :"key1"
}

// console.log(jsuser.email)

// console.log(jsuser["email"]) // as keys are taken as 
//strings

// here as ive added " " to age then it wont be accessed 
//from the .method
console.log(jsuser["age"]);

// console.log(typeof jsuser[mysym])

console.log(jsuser)
//console.log(jsuser["email"])
//  // ye yaad rakhni hi haii kyuki interview main 
// puchlenge for symbol and datatype

jsuser.email="diyawadhwa@chatgpt"


//Object.freeze(jsuser)
console.log(jsuser)

jsuser.greeting=function(){
    console.log("Hello js user");
    
}
jsuser.greeting2=function(){
    console.log(`Hello ${this.name}`);
    
}
//console.log(jsuser.greeting)// [Function (anonymous)]
 console.log(jsuser.greeting2()); //Hello js user
// undefined



