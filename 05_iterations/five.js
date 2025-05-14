const coding=["js","ruby","java","python","cpp"]
// 
//for each contains a callback function and callback has no name
// coding.forEach( function (item){
    // console.log(item)
// }) 

// coding.forEach( (item) => {
//     console.log(item);
// })

function printme(item){
// console.log(item);
}

// coding.forEach(printme) 

coding.forEach((item,index,arr)=> {
    // console.log(item,index,arr);
})

const myCoding =[
    {
        languagename:"javascript",
languagefilename:"js"
    },
    {
        languagename:"java",
languagefilename:"java"
    },
    {
        languagename:"python",
languagefilename:"py"
    }
]
// very common and mostly every value is object
myCoding.forEach( (item) => {
    
  console.log(item.languagename);
  
})
