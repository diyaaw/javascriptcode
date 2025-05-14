const myNums=[1,2,3,4,5,6,7,8,9,10]

//  const add =myNums.map((num) => {
// return num*10;
// })

const newnums= myNums
.map((item) =>{ return item*10})
.map((item) => {return item*10})
.filter((item) => { return item>400})
console.log(newnums);
