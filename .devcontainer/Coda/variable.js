const rollNo = 1234
// it is immutable it declared once only and not changed again

var Name = "James"
/*
plz do not use var var has scope 
issue and it allows 2 different var 
with same name
*/

let password = 12345
// it's best to declare any varibale

cityUser = "Chennai"
/*
we can also declare any var like this 
but it 's not good enough
 */


let State;  //here if we don't assign value to a var it will print Undefined

Name = "Abhishek"

console.log(rollNo)
console.log(Name)
console.log(cityUser)
console.log(password)
console.log(State)


//string convert into int
let a2 = parseInt("s679jjjj989");
console.log(a2);


let a3 = parseInt("679jjjj989");
console.log(a3);

//UNdefined:-------------------------------->
// things which are not defined /initialed /

let a4;
console.log(a4);
console.log(typeof a4);

//null--------------------------------------->
//null is a value also to assign a var 

console.log("null--------------------------------------->");
console.log(+null);
console.log(+undefined);

let a5 = null;
console.log(a5);
console.log(typeof a5);

let bigint = 782638764872;
console.log(bigint);



