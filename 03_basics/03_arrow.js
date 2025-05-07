//this - current context ko refer karta hai
// global object in browsser- windows
//console mai this ki value {} aati hai
// object main bhi current context ki baat hosakti
//  haii function main undefined hojayega.
 

// const user={
//     username: "Diya",
//     price: 999, 

//     welcomeMessage: function(){
//         console.log(`${this.username}, welcome to website`);
        
//     }
// // }
// user.welcomeMessage()
// user.username="Lucky"
// user.welcomeMessage()
 
//this gives a lot of stuff
//function ke andr this nahi chalta hai
// function chai(){
//     console.log(this);
    
// }

// this gives am empty object
const chai= () =>{
    let username="diya";
    console.log(this);
}

//global object
chai()
const chai2=function () {
    let username="diya";
    console.log(this);
}

chai2()

// basic arrow function
//  const addtwo= (num1, num2) => {
// return num1+num2;
//  }

// explicit main return keyword lagana padega


 // implicit return
 // agar curly braces main wrap kara toh return keyword likhna padega
 //  but agar parenthesis main likha toh koi dikkat nhi hai.
// {} likhna pdega return keyword
//() jaroori nhi hai likhna return keyword


//this is implcit return
//  const addtwo = (num1,num2) => (num1*num2);
// console.log(addtwo(3,4));

// const addtwo=(num1,num2)=>({username:"hitesh"});
//here if we want to put an object toh parenthesis to lagane hi pdenge




// console.log(addtwo(3,4));

//showing different syntaxes down

const myArray=[1,2,4,6];
myArray.forEach(function (){})

myArray.forEach( () => {})

myArray.forEach( () => ({}))
//in case there is an object