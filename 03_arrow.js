//this - current context ko refer karta hai
// global object in browsser- windows
// object main bhi current context ki baat hosakti haii function main undefined hojayega.
 
 
const chai= () =>{
    let username="diya";
    console.log(this);
}

// chai
// basic arrow function
//  const addtwo= (num1, num2) => {
// return num1+num2;
//  }
// explicit main return keyword lagana padega
 // implicit return
 // agar curly braces main wrap kara toh return keyword likhna padega but agar parenthesis main likha toh koi dikkat nhi hai.

//  const addtwo = (num1,num2) => (num1*num2);
// console.log(addtwo(3,4));

const addtwo=(num1,num2)=>({username:"hitesh"});
console.log(addtwo(3,4));

co