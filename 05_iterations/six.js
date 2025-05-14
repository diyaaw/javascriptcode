const coding=["js","ruby","java","python","cpp"]

const values= coding.forEach((diya) =>{
    // console.log(diya) 
})


// console.log(values)

// scope start krdia agar curly braces lagakar toh return keyword specify krna pdega
const munums =[1,2,3,4,5,6,7,8,9,10]

const newnums =munums.filter((item) =>{return item>6} )
// console.log(newnums);

const newNums=[]
munums.forEach((num) =>{
    if(num>4){
         newNums.push(num)
    }
})
// console.log(newNums);


let userbooks=books.filter((bk)=> bk.genre==="hisotry")
userbooks=books.filter((bk)=> {
    return bk.publish>1995 && bk.genre=== "science"
})

console.log(userbooks);
