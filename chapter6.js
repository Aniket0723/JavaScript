// Class
// Classes are easier way to implement inheritance in JavaScript

//Prototype Version

// function User(name){
//     this.name = name
// }
// User.prototype.sayHi() = function(){
//     return this.name
// }

// let user = new User('John')
// user.sayHi();

// Class Version
class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    return this.name;
  }
}

User.prototype.sayHello = function(){
    return this.name
}

let user = new User('john') // argument constructor me chala jaenga
// console.log(user.sayHi())
let user1 = new User('aniket')
// console.log(user1.sayHello())


// Similarities 
// 1 Same Kind of prototype property with constructor 
// method is added when called with new 
// you can use prototype also on class based things 

// Differences
// Class methods are non-enumerable
// Class toString() is different 
// Class can only be called with new.
// Class is always is use strict mode


// getter/setters
// accessor properties

class Parent{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName(){
        return this.firstName + ' ' + this.lastName;
    }
    set fullName(_fullName){
        this.firstName = _fullName.split(' ')[0];
        this.lastName = _fullName.split(' ')[1];
    }
}

let child = new Parent('Aniket','Nagrale')
// console.log(child.fullName)
child.fullName ="Ashutosh Nagrale" 

// console.log(child.firstName)
// console.log(child.lastName)

// this binding issue in class

class Button{
    constructor(value){
        this.value = value
    }
    // click(){
    //     console.log(this.value)
    //     return this.value
    // }
    click =() =>{
        // console.log(this.value)
        return this.value
    }
}

let button = new Button('play');
button.click()
setTimeout(button.click,1000)
// ye function timeout api k jagah chala gaya
// par isk pura context nhi gaya iske sath
// waha is function is defination available hai
// lekin usko uska context nhi pata this kho jata hai ek tarah se

//solution
// setTimeout(button.click.bind(button),1000)
//bind fix kar deta hai iska refrence button se hi rahenga

//Inheritance

// Inherit Properties from Parent to Child

// class Shape{
//     constructor(name){
//         this.name = name
//     }
//     displayShape(){
//         console.log(`Shape ${this.name}`)
//         return 'Shape' + this.name
//     }
// }
// // extends link between Shape and Rectangle
// class Reactangle extends Shape{
//     constructor(name,width,height) {
//     super(name);//Zaruri hai 
//     this.width = width;
//     this.height = height;
//     this.area = width * height   
//     }
// }

// let Reactangle1 = new Reactangle('Reactangle1',20,10);
// Reactangle1.displayShape()
// console.log(Reactangle1.area)

// for(let x in Reactangle1){
//     console.log(x)
// }

// Static Methods
// methods on constructor function 
// class Shape{
//     constructor(name,area){
//         this.name = name;
//         this.area = area;
//     }
//     static areaEqual(shape1,shape2){
//         return shape1.name === shape2.name &&
//         shape1.area === shape2.area
//     }
// }

// let s1 = new Shape('rectangle',100);
// let s2 = new Shape('rectangle',100);

// console.log(Shape.areaEqual(s1,s2))



//Private and Protected Properties