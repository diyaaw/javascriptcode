const myNums=[1,2,3,4,5,6,7,8,9,10]

//map is also a callback function like filter


//  const add =myNums.map((num) => {
// return num*10;
// })

const add2= myNums.map((num)=> num+10) 
console.log(myNums);

//chaining

const newnums= myNums
.map((item) =>{ return item*10})//this result acts as input for second
.map((item) => {return item*10})
.filter((item) => { return item>400})
console.log(newnums);
