//  console.log(2>1)
//  console.log("2">1)
//  console.log("02">1)

console.log(null>0)
console.log(null<0)
console.log(null==0)
console.log(null<=0)
console.log(null<2)
// the equality check == and comparisons >< >= <= works differently.
// comparisons convert null to a number, treating it as 0.    
console.log(undefined==0);
console.log(undefined>=0);
console.log(undefined<=0);
// avoid conversions of different dataypes for example null and 0, undefined and 0


// === strict check it checks data type as well