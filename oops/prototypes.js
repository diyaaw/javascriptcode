let computer={cpu:12}
let lenovo={
    screen:"HD",
    __proto__:computer// this means that whatever was the prototype of the prototype object is also now the prototype of the lenevo object
};

let tomhardware={};
console.log(computer);


//here using dundur prototype __

// console.log('computer',computer.__proto__);// in this an empty object comes

// console.log('lenovo', lenovo.__proto__);// this shows the objects of computer

let genericCar={
    tyres:4
}

let tesla={
driver:"AI"
};

Object.setPrototypeOf(tesla,genericCar);


console.log('tesla', tesla.tyres);// this can also be used to 


console.log("tesla", Object.getPrototypeOf(tesla));// this can also be used


//get prototype is much better


