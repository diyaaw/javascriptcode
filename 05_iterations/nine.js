 const mynums=[1,2,3,4 ]

//  const myTotal= mynums.reduce((accumulator,currentvalue) =>{
//     console.log(`accumulator is ${accumulator} and currentvalue is ${currentvalue}`)
    
//      return accumulator+currentvalue},0)

    //  const myTotal= mynums.reduce(function(accumulator,currentvalue){
    //      console.log(`accumulator is ${accumulator} and currentvalue is ${currentvalue}`)
    //   return accumulator+ currentvalue
    //  },0)

// const myTotal= mynums.reduce( (accumulator,currentvalue)=> (
// accumulator+currentvalue
// ),0)
//  console.log(myTotal);
 
 
const shoppingcart=[
    {
        itemName: "Jscourse",
        price:2999
    },
      {
        itemName: "dscourse",
        price:12999
    },
      {
        itemName: "pycourse",
        price:299
    },
      {
        itemName: "mobilecourse",
        price:5999
    }
]
const priceTopay=shoppingcart.reduce((acc,item)=>{
 return acc+ item.price} ,0)
console.log(priceTopay)