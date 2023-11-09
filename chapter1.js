// let vs var
for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        // console.log(i)
    }, 1000)
}
// print 0 ,1,2,3,4
// let block scope hai to loop me baar baar naya variable ban jayenga 
// har baar naya scope create karenga
// is wajah se har bar setTimmeout k under i k alag alag value jati rahnegi
//using let 
// let is blocked scope
// let value was 0  it has completely diffrenet scope
//  so it's gonna print
// it later on then again the second value of i was 1 so again
// after the complete code has run successfully
//{ i = 0}
//{ i = 1}
//{ i = 2}

for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i)
    }, 1000)
}
// var global variable 
// i ek tarh se global variable k tarah kam kar raha 
// is case me setTimeout me app ek function pass kar rahe ho
// jo global i se value leta hai 
// var has a function scope
// first time runs var value is 0  but not printed because 
// setTimeout only runs after the complete code has been ran successfully
// now we have reference to that i variable in our meomrary 
// then i=1 i=2 i=3
// so i should be less than 3 so loop end here 
// and now setTimeout has finsed it timout and now js engine will print
// so current value of i is 3


// using closure 
for (var i = 0; i < 5; i++) {
    function inner(i) {
        setTimeout(function log() {
            // console.log(i)
        }, 1000)
    }
    inner(i)
}

// Temporal dead Zone
// the area in which a vairable is not accessible
// It depends on time of execution not position

// let a = 100;
// let b = 0;

// {
//     // console.log(a)
//     let a = 1;
// }

// {
//     const say = () => console.log(msg);//hi

//     let msg = 'Hii';
//     say()
// } 


// Variable Shadowing
// nearest value will be preferred 
// let x =0; //-> this is shadowed variable 
// {
//     let x= 1;
//     console.log(x)
// }


//global object 
//window is a global object 
// window.a = 0


//function scope
//it is create upon execution a function 
// banta tab hai jab wo ek baar call hota hai

// function sayHi(name){
//   console.log("Hi "+name)
// }
// sayHi('Aniket')


// Lexical Environment 
// Every variable in JS has a reference to an object-like data
// called Lexical Enviroment

// ek simple object like data 

// let name = "Aniket";
// function sayHi(){
//     let greet = "Hi"
//     console.log(greet)
// }
// sayHi()
// console.log(name,sayHi)


function init(){
    let name = 'Aniket';

    function greet(){
        console.log(name)
    }
    return greet;
}
let sayHi = init();
sayHi();


// global scope -> name aur sayHi()--> lexical env1
// lexical env 2 -> greet

// let name = "Aniket";
// function sayHi(){
//     let greet = "Hi"
//     console.log(name)
// }
// sayHi()



//Hoisting -> declaration are moved to top of scope
// y = 4; // assingment 
// // console.log(y) // usage
// var y; // declaration

// say()
// function say(){
//     // console.log('say')
// }

// sayHello()//error
// let sayHello = function(){
//     console.log("Hello")
// }
//let ko phle execute nhi karenga 
// let ko declaration se phle use nhi kar sakte


// var a =11;
// {
//     console.log(a)
//     console.log(b)
//     let b = 10;
// }


// CLOSURES

// function createUser(name) {
//     let greeting = 'Hi '
//     function greet() {
//         return greeting + name + ' is Created';
//     }
//     return greet
// }
// let newUser1 = createUser('Aniket1');
// let newUser2 = createUser('Aniket2');

// console.log(newUser1(),newUser2());
// even though function ki defination bhaer ayi 
// per wo is ke sath sath virable ko ape sath leke ayi

// Closure kis chiz ko khete hai  jab apka inner function tha 
// greet return ho jata but still acces rahti hai outer params and variable 
// is chiz ko closure bolte 


// function increement(){
//     let count = 0;
//     console.log(count++);
// }
// increement()
// increement()
// increement()
//closure waha use karna hai jaha pe ek function hai 
// kisis data pe act kar raha per use data to preseve karke rakhna hai

//IIFE Immediately Invoked Function Expression
// It avoid redeclaration of variables inside it

(function(){
    var x =1;
    // console.log(x)
}())

//Currying 
//closure ka ek version hai 
// function sum(a){
//     return function(b){
//         return function(c){
//             return a+b+c
//         }
//     }
// }
// console.log(sum(1)(2)(3))
// //
// let sum1= a => b => c => a+b+c
// console.log(sum1(1)(2)(3))

// let log = time => type => msg => `At ${time.toLocaleString()}: severity ${type} => ${msg}`

// console.log(log(new Date())('error')('power not sufficient'))

// let logNow = log (new Date())

// console.log(logNow('warning')('temp high'))

// let logError = log(new Date())('error')

// console.log(logError('unkown error'))