//Singleton
const obj = new Object()
const obj1 = {} // Literal
obj1.name = "bulbul"
obj1.id = "1904101" 
obj1.email = "anythig@gmail.com"

// console.log(obj1)

const obj2 = {
    age: 24,
    FullName :{
        userFullName:{
            Firstname:"Mohammad", 
            MiddleName: "Imtiaj",
            LastName: "Uddin"
        }
    }

}
// console.log(obj2.FullName.userFullName);
const obj3 = {
    1:"12221",
    2:"dfhsudfh"
}

const ob4 = {
    3: "sdfsnf",
    4: "dsufhiwcnwoe"
}
const ob5 = {
    obj3,
    ob4
}
console.log(ob5)
const ob6 = Object.assign({}, ob4, obj3)
console.log(ob6);
const ob7 = {...ob4, ...obj3}

console.log(ob7);

console.log(Object.keys(ob7))
console.log(Object.values(ob7));

console.log(Object.entries(ob7));

