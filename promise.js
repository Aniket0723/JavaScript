// Synchronous and Asynchronous code

//Sync  --> Line by Line
console.log("Synchronous")
console.log("Start")

console.log("HELLO ANIKET")

console.log('Finish ')

//Async 
console.log("Asynchronous")
console.log("Start")
setTimeout(()=>{
    console.log("HELLO ANIKET")
},2000)
console.log('Finish ')