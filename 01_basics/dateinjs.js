// dates from 1st jan1970
//future main we will use temporal api
let myDate= new Date()
//date is an object i.e. type of date is an object 

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString()); 

// let my CreatedDate=(2023,0,23,5,3) (year,day,date,mins.secs)
// let myCreatedDate=new Date("01-14-2024")
//let timestamp= Date.now()

//timestamps ko  hum quizes ya polls main use krenge

// console.log(timestamp);
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000)); // in sec

// interview common question-Date.now() humko milsec main
//  value dega
// but on dividing date,noe by 1000 vo value sec main   
// and on further Math.floor krne se all decimal value vanishes                          


let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth()+1);
//  // +1 to end user ko samjhane ke liye kyuki 0-11vhi
//  hote haii
// console.log(newDate.getDay());


//this will be used a lot
//helps in customization of weekdays etc
console.log(newDate.toLocaleString('default',{
    weekday: "long",
    
}));