// for of loop= a rray specific

["","",""]// strings
[{},{},{}]// objects

const arr=[1,2,3,4,5]
for (const num  of arr) {// here num is variable name
    // console.log(num);
}
// const greetings="Yello world"; 
// for (const greet of greetings) {
    // console.log(`each char is ${greet}`);

 
// maps- unique values in the order given
const map=new Map()
map.set('IN',"India");
map.set('USA','United states of America') ;
map.set('Fr','France');
map.set('IN',"India");


// console.log(map);

for (const [key,value] of map) {
    // console.log(key,":-",value)
}


const myObj ={
"game 1": "Spiderman",
"game 2":"Mario"
}

for (const [key,value] of myObj) {
    console.log(key ,":-",value );
}
// here myObj is not itiratable