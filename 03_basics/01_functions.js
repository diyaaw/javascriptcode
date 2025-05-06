// ek baar return krdia toh kuch bhi function ke andr execute nhi hogaa 
// kyuki return k bad kuch bhi print nhi hota hai  

// jab bhi function main kuch bhi pass krte haii toh null
//  nhi aata haii. undefined aata hai

// agar function ke andr ke bracket ke andr commas 
//  dale hai i.e. empty strings
//  toh empty string keh sakte hai aur undefined nhi aayega

// empty string and undefined is assumed to be a false value

//...(yhi spread hai aur yhi rest bhi hai bas iske use case pe depend krta haii)

function sayMyname(){
    //     console.log("D");
    //     console.log("I");
    //     console.log("Y");
    //     console.log("A");
    } 
    sayMyname()// execution
    sayMyname// refernce
    
    // function addtwonumbers(number1,number2){// parameters
    //     console.log(number1+number2);
    // }
    
    // addtwonumbers(5,7)// arguements  
    
    function addtwonumbers(number1,number2){
    return  number1 + number2
 
    }
    const ans=addtwonumbers(5,7)
    console.log("Result", ans);
    
    //return and console are two different things
    //return returns the value for further use as well
    //console is just from printing
    
    // const result=addtwonumbers(5,8);
    // console.log(result);
    
    function multiply(number1,number2){
    return number1*number2;
    }
    const result=multiply(6,8);
    // console.log(result);
    
    // function loginusermessage(username="sam"){
    //     if(!username){
    //         console.log("Please Enter a valid Username");
    //         return;
    //     }
    //     else{
    //     return `${username} just logged in`;
    //     }
    //}
    // console.log(loginusermessage("diya"));
    // console.log(loginusermessage( ));
    

    //this is rest operator here ... is same for
    //both spread and rest
    function CalculateCartValue(val1,val2,...num1){// val1 aur val2 ko chdke sab khudse hi print hogye haii
        return num1;
    }
    // console.log(CalculateCartValue(200,67,324,34,36,3463345,3537,547));
    const user={
        price: 1000 , 
        username:"DIya"
    }
     function handleobj(anyobject){
      //  console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
    
     }
     //one way to call object
    handleobj(user);

    //second way to call object
    handleobj({
        username:"Diya",
        price:399
    })

    
    const MyNewArr=[200,6,45,67,35]
    function ReturnSecondVal(getarr){
    return getarr[1];
    }
    //one method
    //console.log(ReturnSecondVal(MyNewArr));

    //second method
    console.log(ReturnSecondVal([200,400,500,1000]));