// We can create variable in js by 3-ways:------------------------>

/*
1. let ---------->>     (bestammmm best)
2. var ---------->>     (plz try to avoid)
3. const -------->>     (for constant values(unchaged))
*/


//create variable is same like buying a plot and constructing anytype of building;
// similarly by var we hold(buying) a space in memory and store(constructing) any kind of value

// using *****let*****, in let we can not create 2+ var with same name,  
//can NOT be accessed out of scope


let username = 'Mark Tyson';
console.log(username);

username = 'Mike Tyson is correct name '
console.log(username);



//using -----var----, it allows we can create 2+ var with same name,
// can be accessed out of scope

var username1 = "John Cina";
console.log(username1);

var username1 = "Randy Orton";
console.log(username1);

//using -----const----, it allows we can create N assign value only once, we can never change it's value gain
//can NOT be accessed out of scope

const pi = 3.14;
console.log(pi);

//pi=3.15;                                       it will not be executed and show error 
//console.log(pi);


//---------------------------------------------------------------------------------------------------------------//

let firstname = "Nikki";
let lastName = "Bella";
let age = 39;

console.log("Namaste I am "+ firstname+" "+ lastName+" & i'm "+age+" year old.");