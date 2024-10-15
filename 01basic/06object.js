let mysym = Symbol("key set")
// console.log(mysym);
// Object Literal..
let myobj = {
    name : "Imtiaj Uddin",
    age : 24,
    email: "mohammad.imtiaj18@gmail.com",
    [mysym]: "key changed",
    Institution:"CUET"
}
// console.log(myobj.mysym); // undefinded behaviour for symbol
// console.log(myobj[mysym]);

// console.log(typeof mysym);

myobj.name = "Bubul"
myobj.email = "u1904101@student.Buet.ac.ru"

// Object.freeze(myobj) // No changed is possible after freezing any object
myobj.email = "u1904101@student.cuet.ac.ru"
// console.log(myobj);

myobj.fun = function(){
    console.log("This is a Function");
}
myobj.fun2 = function(){
    console.log("Hello, ${myobj.name}, Welcome to JS!!");
    
}

console.log(myobj.fun());
console.log(myobj.fun2());





