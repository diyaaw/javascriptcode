// JAVASCRIPT EXECUTION context-

// 1. global execution context-
//  this(ye toh hoga hi hogaa)

// 2. Function execution context

// 3. Eval execution context

// code in js  runs in two phases-

// 1. memory creation phases(kabhi kabhi log 
// creation phase bhi bol dete hai)

// in memory keval jagah ka allotment hota hai

// let val1=10
// val2=5
// function addNum(num1,num2){
//     let total=num1+num2
//     return total
// }
// let result1=addNum(val1,val2)
// let result2= addNum(10,2)


//first cycle
// val1 and val2 undefined
//  and sare variables are set as undefined
//definitons of functions(addnum=definition)
//and result1 and result2 also undeifned

//second cycle(execution phase)
//val1=10 val2=5

//definition of the function held in frist cycle therfore nothing 
//else to do

//add num -> new varialbe environment+ execution thread
//this new execution context has been created for function addnum
//new varialbe environment+ execution thread- memory phase 
//val1->undefined
//val2-> undefined
//total->undefined

// new variable environment+execution thread-execution context
// num1->10
// num2->5
// tottal->15
//this will return to the global cexecution

//after all the the execution context created by addnum gets deleted

//in the execution phase now
//  result=15

// the call stack will always have global execution in the bottom
//and it will follow lifo principle
