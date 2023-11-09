//Reference Copying 

//Variable value is not copied in case of object/arrays
 
//Nested Object --> key ki primitive value nhi hai 
// let person ={
//     name:'John',
//     address:{city:'Nagpur',state:'Maharashtra'},
// }
// console.log(person)

// person         ---> Object
// Object_address ---> addressObject

// let addressObject = {
//     city:"Nagpur",
//     state:'Maharashtra'
// }

// let person1={
//     name:'Jhon',
//     address: addressObject
// }
// console.log(person1)

//Copying of Object 

// Shallow Copy
// agar apka object ek level ka hai to sare peoperty copy hongi 
// multilevl as it is reference chala chalenga 

// 1 Object.assign()

// let person = {name:'John'}
// let newPerson = Object.assign({},person)
// Two argument 1st one Target 2nd Source

// let addressObject = {city:"Wani",state:"Maharashtra"}
// let person = {
//     name:'John',
//     address: addressObject,
// }
// console.log(addressObject)
// console.log(person)

// let shallowCopyofAddresObject = Object.assign({},addressObject)
// shallowCopyofAddresObject.city= 'Pune'
// console.log(shallowCopyofAddresObject,addressObject)

// let sCopy = Object.assign({},person)
// sCopy.name='Aniket'
// sCopy.address.city = 'Nagpur'
// console.log(sCopy,person)


// 2 Spread Operator

// let uSpreadO = {...person}
// console.log(uSpreadO)


//////////////////////////////////////////

//  Deep Copy

//1 JSON.stringify and JSON.parse
// this method utilize the fact that every JSON can
// converted to a string value 
// exception of methods.function 

// let deepCopy = JSON.parse(JSON.stringify(person))
// deepCopy.name='Aniket'
// deepCopy.address.city = 'Nagpur'
// console.log(deepCopy,person)

//2 structureClone 
// Browser API which work even  for circular  references

// person.me = person
// let deepCopy2 = structuredClone(person)
// deepCopy2.name='Aniket'
// deepCopy2.address.city = 'Nagpur'
// console.log(deepCopy2,person)

// this and method 
// this hamesha method k terms me hota hai 

// let person ={
//     name:'Aniket',
//     sayHi:function(){
//         return "Hi " + this.name
//     }
// }
// console.log(person.sayHi())

// function sayHi() {
//     return 'HI ' + this.name;
// }
// let obj1 = { name: "Aniket" }
// let obj2 = { name: "Anu" }

// obj1.say = sayHi
// obj2.say = sayHi

// console.log (obj1.say())
// console.log (obj2.say())

// Arrow function does not follow this keyword 


// Symbol
// This data type os used as property name in Objects
// properties k name dene k kam ata hai 


// Symbol function ki tarah execute 

// const id = Symbol("id");
// const idx = Symbol("id")

// let person ={
//     name:"Aniket",
//     [id]:1,
//     [idx]:2
// }
// console.log(person)

// Symbol genaraly hidden propeties ko rakhne ko kam me ata hai
// hidden bhi ho aur overwrite bhi nhi ho