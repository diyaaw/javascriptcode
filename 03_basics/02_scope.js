{}//scope- jab kisi function ke sath ata haii tab scope ho jata haii

// if ke andr- blockscope
// if ke bhr-global scope
if(true){
    let a=10;
    const b=20;
    var c=30;// avoid jydatar
}
// console.log(a);// ye undefined aayegaa
// console.log(b);// undefined
// console.log(c);// ye aajayega toh thoda dicy hai kyuki if main jayega toh bhi value badal jayegi

// core scope(console ke andr scope) alag haii
// node ke through scope alag hai

function one(){
    const name="hitesh";
    function two(){
const website="youtube";
// console.log(name);
    }

    // console.log(website);
    two();
}
one();

// if(true){
//     const username="hitesh"
//     if(username==="hitesh"){
//         const website="youtube";
//         console.log(username + website);
    // }
    // console.log(website); idhar error aayega
// }
// console.log(username);// ye nhi hoga kyuki scope mai nahi haii  


// hoisting concept
console.log(addnum(5));
function addnum(num){
    return num+1;
}


console.log(addtwo(5));
const addtwo=function(num){
    return num+2;
}


// jab  bhi function ko variable main daalke uske upar execute kar
//  rahe hai toh error aajata haii.

//here in case of addone function it gets executed but in case of
//add two it doeesnt due to holding it in a variable