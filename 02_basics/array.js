// //array object 


// marvelheros.push(6);
// marvelheros.pop();
// marvelheros.unshift("Diya");
//unshift is insertion at start

// marvelheros.shift();
// //deletion of first element in shift

// console.log(marvelheros.includes("Cute"));
// //includes returns in true or false

// console.log(marvelheros.indexOf("thor"));
//returns the index on which my element is present

// const myArr= marvelheros.join();
// //join returns the elements of my array and also converts
// ///it into string-imp from interview prespective
// console.log(myArr);


//slice splice
// in case of slice the original array remains unchanged but
// in case of splice the original array is also modiified 
// and the last range is not included in slice whereas it is
// included in splice

const newArr=[1,2,3,4,5,6];
const my1=newArr.slice(2,5);
console.log("A" , newArr);
console.log(my1);


const my2=newArr.splice(2,5);
console.log("B", newArr);
console.log(my2);


const marvelheros=["thor", "Iman", "Spiderman"]
const dc_heros=["Superman","Flash","Batman"]
 marvelheros.push(dc_heros)
//array ke andr array aayega 

 console.log(marvelheros);
console.log(marvelheros[3][1]);


// concating
// const allheros = marvelheros.concat(dc_heros)
// console.log(allheros);

// spread - kaanch ka glass(... )
//people generally prefer spread over concatenation because 
// you an have n number of arrays in spread 
// const newheros=[...dc_heros,...marvelheros]
// console.log(newheros);

// const nayeheros=[1,2,3,[4,5,[6]],7,[8,9,[7,6,4]]];
// const pakkeheros=nayeheros.flat(Infinity);
// console.log(pakkeheros)

console.log(Array.isArray("Diya"))
console.log(Array.from("diya"));


console.log(Array.from({name:"Diya"}));
//intersting for interviews as it cant convert directly

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));




