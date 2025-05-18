const coding=["js","ruby","java","python","cpp"]

//for each doesnt return any values

const values= coding.forEach((diya) =>{
    // console.log(diya) 
})


// console.log(values)

// scope start krdia agar curly braces lagakar
// toh return keyword specify krna pdega
const mynums =[1,2,3,4,5,6,7,8,9,10]

//filter gives return values
//conditions have to be given

//a mistake in filter is that when you use scope use return keyword

const newnums =mynums.filter((item) =>{return item>6} )
// console.log(newnums);

const newNums=[]
mynums.forEach((num) =>{
    if(num>6){
         newNums.push(num)
    }
})
// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userbooks=books.filter((bk)=> bk.genre==="History")
 
// userbooks=books.filter((bk)=> { return bk.publish>1995 &&
//  bk.genre=== "science"
// })

console.log(userbooks);
