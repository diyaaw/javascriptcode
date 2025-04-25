//both of them are object declarations only
//const tinderUser= new Object{}//singleton object
const tinderUser= {}//non singleton object
console.log(tinderUser);



const regularuser={
    email: "ofvnfd@gmail.com",
    fullname: {
        username: {
    first: "diya" ,
    second: "wadhwa",
        }
    }
    
    }
  console.log(regularuser.fullname.username.second)
    
    const obj1={
        1:"a",
        2:"b"
    }
    const obj2={ 3:"c",4:"d"}
    const obj3={5:"e", 6:"f"}
    const obj4=Object.assign({},obj1,obj2,obj3)//
    //{} is optional but we do it becuase according to 
    //syntax the first element is a target element
    // console.log(obj4)
    
    // object through spread
    const obj7={...obj1,...obj2}
    console.log(obj7)
    console.log(regularuser)
    
    const users={
        id: 1,
    email: "diya@gmail.com"
    }
     
    // users[1].email doubt haii
    // console.log(regularuser)
    
    console.log(Object.keys(users));
    console.log(Object.values(users));
    console.log(Object.entries(users));
    
    
    const course={
        price:6000,
        coursename:"ABC",
        cInstructor:"hitesh sir"
    }
    // course.cinstructor
    
    const{cInstructor: diya}=course
    console.log(diya) // object ko destructure krnaa kehlata hai
    
    // API- apna kaam kisi aur pr daaldenaa
    //json format
    [
        {},
        {},
        {}
    ]