// Prototypes

// Prototypical Inheritance
// Objects are extended from other Objects
// we can reuse their properties and methods
// Objects are chained in prototypical inheritance
// Objects have a hidden property called [[Prototype]]

// ek object dusre object ko extend karta hai

// Animal <--- Dog
// animal is prtotype of dog
// dog prototypically inheritted from animal

//walks <--- Animal <--- Dog

// __proto__ -->functions
// it is a getter/setter for [[Prototypes]]

// Properties of an Object
// 3 Criteria
// 1 own or inherited
// 2 enumerable or non-enumerable
// 3 String or Symbol

let animal = {
  eats: true,
  walks: function () {
    // console.log("walks");
  },
};
let dog = { barks: true };
dog.__proto__ = animal;
// dog.eats = false;

// let myDog ={name:"BOKU"}
// myDog.__proto__ = dog
// myDog.name
// myDog.barks
// myDog.walks()
 
for(let key in dog){
   if(dog.hasOwnProperty(key)){

    //    console.log(key)
   }
}
//Consrtuctor
// simple object banate ho let user ={name:'John'}
//par apka program bada program ho aur wo baar baar new user genrate karta hai khud se
// tab prefer kiya jata hai constructor function use kiya jaye

// jab bhi this aya hai aur function k under aya hai 
// to wo constructor hai aur new keyword k sath call kiya hai

function User(name){
    this.name = name
}
//this refer kar raha hai jo new object ab banenga 
//constructor initialization 
// let user = new User('Bala')

// console.log(user)
// console.log(User.prototype)

//Step 1
//.prototype property automatically created 
// (on User) and is assigned an Object

//Step 2 
// constructor method is assigned to this prototype
// console.log(User.prototype.constructor === User)

//Step 3
//happen After constructor call new User()
// .prototype property's object is assigned to created instances
// console.log(user.__proto__ === User.prototype)


// methods

User.prototype.sayHi = function(){
    return this.name;
    
}

let user = new User('Aniket')
let user1 = new User('Nagrale')

user.sayHi();
user1.sayHi()

// ReverseString

User.prototype.reverseName = function(){
    return this.name.split('').reverse().join('');
}
user.reverseName()
user1.reverseName()

let flower ={
  branch:true,
  glows:function(){
    return 'glows'
  }
}

function Petals(){
  this.color = true
}

Petals.prototype = flower;

let petals = new Petals();

petals.glows();
petals.__proto__ === flower
petals.prototype === petals.__proto__

//Native Prototype
//Jo phle se JavaScript me Inbuilt hai 
// 1 Object.prototype
// 2 Array.prototype
// 3 Function.prototype


