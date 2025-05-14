 const mynums=[10,20,30 ]

 const myTotal= mynums.reduce((acc,curval) =>{
    console.log(`acc is ${acc} and curval is ${curval}`)
    
     return acc+curval},0)
 console.log(myTotal);
 