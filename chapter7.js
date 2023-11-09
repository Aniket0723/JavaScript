// Async JavaScript

//Asynchronous APIs
//JavaScript Itself asynchronous language nahi hai
//wo ek synchronous language hi hai 

console.log(1)
//setTimeout ek api hai
setTimeout(() => {
    console.log("Delayed for 1 second.");
  }, "1000");
  setTimeout(console.log,2000,23)
console.log(2)


//Event Loop
