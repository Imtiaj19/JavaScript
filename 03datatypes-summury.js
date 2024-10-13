// primitive types:
/* 7 types:
    string , Number, BigInt, Bollean, null, undefind, Symbol
*/

let num = Symbol("1234")
let anothernum = Symbol("1234")
console.log(num == anothernum); // though both num and anothernum has same value but Symbol return different value hence ans is false
console.log(anothernum);
let bigin = 94739420380274n //biginteger


// Non - Primitive
/*
  Arrray:
  let ar = ["bu", "ka", "cu", "da"]

  function:
  const mufun = fun(){
     console.log("Salam")
  }
  
  object:
  let myobj = {
    name = "Bulbul",
    din = "islam",
    age = 24
  }

*/
let ar = ["bu", "ka", "cu", "da"]
console.log(typeof ar);

let myObj = {
    name :"Bulbul",
    din :"islam",
    age : 24
  }
console.log(typeof myObj);

const myFun = function(){
    console.log("Salam");
 }
 console.log(typeof myFun);
 





