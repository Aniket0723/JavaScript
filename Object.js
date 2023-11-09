// Object 
// An object is collection of property 
// property ia an association between a name [or key] and value

// const user = {
//     name:'Aniket Nagrale',
//     age:23,
// }
// user.age = 24

// console.log(user)

// delete user.age

// console.log(user)

//Delete Keyword

// const func = (function(a){
//     delete a;
//     return a;
// })(5);
// console.log(func);
//output -> 5

// a is the local variable
// delete is only use when we want delete property from Obj


// When we want to add property with spaces
// like-> Date of birth 

// const user= {
//     name:'Aniket',
//     age:23,
//     "Date of Birth":'07-05-200'
// }
// console.log(user)

// user["Date of Birth"] = '08-05-2000'

// console.log(user)

//Adding Dynamic key value

// const property = 'firstName'
// const name = "Aniket Nagrale"

// const user ={
//     [property]:name,
// }
// console.log(user.firstName)

//Looping Through Array -->Iterate through an Object
//using for in loop

// for(key in user){
//     console.log(user[key])
// }


//INTERVIEW QUESTIONS 

// QUE 1 -> first key will be replace but value will be change
// const obj ={
//     a :"one",
//     b:"two",
//     a:"three"
// }
// console.log(obj)

//QUE 2 ->
// Create a function multiplyByTwo(obj) that 
// multiplies all numeric property values by 2

// let nums = {
//     a :100,
//     b :200,
//     title:"My nums",
// }
// function multiplyByTwo(obj){
//     for(key in obj){
//         if(typeof obj[key]=== "number"){
//             obj[key] *=2;
//         }
//     }
// }
// multiplyByTwo(nums)
// console.log(nums)

//QUE 3 --->


// const a = {};
// const b = {key:"b"};
// const c = {key:"c"};

// a[b]=123;  
// a[c]=456;

// console.log(a[b])


//QUE 4
// JSON.stringify - Obj to String

// JSON.parse -> String to Obj

// const user = {
//     name:'Aniket Nagrale',
//     age : 24
// }
// const str = JSON.stringify(user)
// console.log(JSON.parse(JSON.stringify(user)))

// // where we use
// localStorage.setItem('test',str);
// console.log(localStorage.getItem('test'))


// const settings ={
//     username : "Aniket",
//     level:19,
//     health:88,
// }

// const data = JSON.stringify(settings,["level","health"])
// //giving this array it will only stringify the level health properties
// console.log(data)


//Spread operator

// console.log([..."Aniket"])

// const user = {name:"Aniket",age:23};
// const admin ={admin:true,...user};
// we get all properties of user inside the admin
// console.log(admin)


//QUE -> 5
// const shape ={
//     radius:10,
//     diameter(){
//         return this.radius *2 ;
//         // this gona refrence shape object
//     },

//     perimeter : () => 2* Math.PI * this.radius,
//     // this is arrow function
//     // this gona refrence window object
// }

// console.log(shape.diameter());//20
// console.log(shape.perimeter());//NaN

//QUE 6 -> Destructuring in Object 
// Means takeing out specific properties from object

// const user ={
//     name:"Aniket",
//     age: 23,
//     fullname:{
//         first :"Aniket",
//         last : "Nagrale"
//     },
// };

// const {fullname:{last}} = user;
// console.log(last)

//QUE -> 7
//Object referncing

let c ={greeting :"Hey!"}
let d;
d=c;
c.greeting="Hello"
console.log(d.greeting)
// we are not copying
// all of the properties of one object to
// the other variable what we do is we just
// simply provide the reference to this
// object to this variable right here so if
// we go on and change anything in d or c
// it will affect both of the object
// because we are simply providing the
// reference and not the complete object

//QUE -> 8

// console.log({a:1}=={a:1});
// console.log({a:1}==={a:1}) 

// for both of these it is going to be
// false for both of them because both of
// them are different objects over here
// both have different space in the memory
// and objects are only equal when they are
// referencing a particular area in the
// memory so over here this is an
// independent object and this is an
// independent object so it doesn't matter
// if you're comparing it strictly or not
// strictly it is always going to give us
// false because both of these are going to
// point to a different memory space

//QUE -> 9

const value = {number:10};
const multiply = (x={...value})=>{
    console.log((x.number *= 2))
};
multiply();
multiply();
multiply(value);


// QUE 16

// shallow copy basically means when we
// copy an object to another object but
// that particular object the other object
// has still got the reference to at least
// some of the properties of the original
// object so when one object holds the
// reference to another object this is
// called a shallow copy
 
// when we completely clone an object into an
// another variable that is called a deep
// copy so we don't have any references to
// the original object and that is why it
// is called a deep copy but then there can
// be another follow-up question to this
// question how can you go on and create a

//Deep Copy

let user ={
    name : "Aniket Nagrale",
    age:24,
}

const newUser = JSON.parse(JSON.stringify(user));
console.log(user,newUser)