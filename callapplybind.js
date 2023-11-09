person ={
    name:'Chotu',
    age:12,
    location:'wani',
}

// function checkName(a){
//     return !this.name;
// }
// // person.check = checkName
// //suppose ek naya object mile
// // function ka context change kar sakte ho
// console.log(

//     checkName.call(person,22)
// )
// //1 parameter  - kiske reference me call karna hai

// var obj ={
//     name:"Aniket"
// }
// // we have to call this function pointing to above object
function sayHello(age,profession){
    return "Hello " + this.name + " is " + age + " year old " + profession
}
// //call
console.log(sayHello.call(person,24,"FrontEnd Developer"))

// // Apply do as same as call but it takes argument in the form of array
console.log(sayHello.apply(person,[24,"FrontEnd Developer"]))

// //Bind
// //it provides with another function which we can use later
// // mereko function banan k dedo me badme kabhi use karunga meri marzi

const bindfunc =sayHello.bind(person);
console.log(bindfunc(23,"Backend Developer"))

// var obj ={name:"Aniket"};
// function sayHi(age,profession){
//     return "Hello " + this.name + " is " + age + " year old " + profession;
// }
// console.log(sayHi.call(obj,23,"FrontEnd Developer"))

// console.log(sayHi.apply(obj,[23,"BackEnd Developer"]))

// const bindFunc = sayHi.bind(obj);

// console.log(bindFunc(23,"Full Stack Developer"))

// const age = 10; //outside variable which is global scope
// var person ={
//     name:"Aniket",
//     age:'23',
//     getAge:function(){
//         return this.age;
//     }
// }
// var person2 = {age:24};
// console.log(person.getAge())//20
// console.log(person.getAge.call(person2)) //24
// console.log(person.getAge.apply(person2)) //24
// console.log(person.getAge.bind(person2)()) //24

//QUE

// var status = "😎";

// setTimeout(()=>{
//     const status = "😘";
//     const data ={
//         status:"♥",
//         getStatus(){
//             return this.status;
//         }
//     }
//     console.log(data.getStatus());  //♥
//     console.log(data.getStatus.call(this)) //😎
//     // this never points to a function
//     // it will points to context
//     // setTimeout pointing to global object
// },0)

//QUE
// const animals =[
//     {
//         species:"LION",name:"KING"
//     },{
//         species:"WHALE",name:"QUEEN"
//     }
// ]
// function printAnimals(i){
//     this.print = function () {
//         console.log("!" + i + " " + this.species + ": " +this.name)
//     }
//     this.print();
// }
// for(let i=0;i<animals.length;i++){

//     printAnimals.call(animals[i],i)
// }

//QUE
//APPEND AN ARRAY TO ANOTHER ARRAY
// const array = ["a", "b"];
// const elements = [0,1,2];

// array.push.apply(array,elements);
// console.log(array);

// const concat = array.concat(elements);
// console.log(concat)

//QUE Find min/max number in an array
// const numbers = [5,6,2,3,7];
// console.log(Math.max(...numbers))

// //using apply
// console.log(Math.max.apply(null,numbers))

//WITH ARROW FUNCTION

// const age  = 10;
// var person ={
//     name:"Aniket",
//     age:20,
//     getAgeArrow:()=>console.log(this.age),
//     getAge:function(){
//         console.log(this.age);
//     }
// }
// var person2 = {age:24};
// person.getAgeArrow.call(person2);//undefined
// // Arrow function
// // this takes context of arrow function
// // from it parent normal function

// person.getAge.call(person2);

///////////////////////////////////////////////////////////
// POLYFILLS ///

//call

let car1 = {
  color: "RED",
  company: "TATA",
};

function getCar(price) {
  // console.log(
  //   `I have purchase ${this.color} of ${this.company} with price of $${price}`
  // );
}

Function.prototype.myCall = function (context = {}, ...args) {
  //check for any error edge cases
  if (typeof this !== "function") {
    throw new Error(this + "It is not callable");
  }
  //take the function that we are calling uh this my call on
  //and add it to this context right over here
  //so i'm gonna take context so this context is
  // an object right so i'm just
  //simply insert our function so i'm going to say
  //context dot i'm going to create another new
  //function inside of
  context.fn = this;
  context.fn(...args);
};

getCar.myCall(car1, 240000);

//POLYFILL FOR APPLY
Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error(this + "It is not callable");
  }

  if (!Array.isArray(args)) {
    throw new TypeError("CreateListFromArray called on non-object");
  }

  context.fn = this;
  context.fn(...args);
};

getCar.myApply(car1, [20000]);

//POLYFILL FOR BIND

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "It is not callable");
  }

  context.fn = this;

  return function (...newArgs) {
    return context.fn(...args, ...newArgs);
  };
};

const newFunc = getCar.myBind(car1, 300000);
newFunc();
