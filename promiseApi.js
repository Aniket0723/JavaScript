// Promise.all()
// make parrellel api call 
// it is use to handle multiple promise together
// take array of promise input
// array as a iterable

// CASE 1
// All Success case 
// Promise.all([p1,p2,p3])
//              3s,1s,2s
// after 3 sec [val1,val2,val3]
// it will wait for all of them to finish

//CASE 2
// One of promise will fail
// Promise.all([p1,p2,p3])
//              3s,1s,2s
// p2 get rejected 
// any soon as any of them get rejected here p2
// promise.all will throw error
// immediately after 1s output will be error p2 not wait for other promises
// no other other things will be shown 

const p1 = new Promise((resolve,reject)=>{
    // setTimeout(()=>resolve("P1 S 3sec"),3000)
    setTimeout(()=>reject("P2 F 5sec"),3000)
})

const p2 = new Promise((resolve,reject)=>{
    // setTimeout(()=>resolve("P2 S 5sec"),2000)
    setTimeout(()=>reject("P2 F 5sec"),5000)
})

const p3 = new Promise((resolve,reject)=>{
    // setTimeout(()=>resolve("P3 S 2sec"),8000)
    setTimeout(()=>reject("P3 F 2sec"),2000)
})


Promise.all([p1,p2,p3]).then(res=>{
    console.log("PROMISE.ALL()")
    console.log(res)
}).catch((err)=>{
    console.error(err)
})




// Promise.allSettled()
//[p1,p2,p3]
// if all of them get successfull 
// [val1,val2,val3]
// if p2 get rejected
// it will wait for all promises to get settled
// irespective of success or failure 
// it will give us array of result
// [val1,err2,val3]


Promise.allSettled([p1,p2,p3]).then(res=>{
    console.log("PROMISE.ALLSETTLED()")
    console.log(res)
}).catch((err)=>{
    console.error(err)
})


//Promise.race()
// the promise which finish first will be the winner
// Promise.all([p1,p2,p3])
//              3s,1s,2s
// as soon as first promise resolve
// it will give result of (val2)
// give result of first settled promise

//if first promise failed 
//then it will throw error 


Promise.race([p1,p2,p3]).then(res=>{
    console.log("PROMISE.RACE()")
    console.log(res)
}).catch((err)=>{
    console.error(err)
})


// Promise.any()
// whenever first promise successfull 
// this wait for first success/fullfilled/resolve
// return the value of fullfilled peomise

// when every promise failed
// return will be aggregated error of 
// array of all the three error

Promise.any([p1,p2,p3]).then(res=>{
    console.log("PROMISE.ANY()")
    console.log(res)
}).catch((err)=>{
    console.error(err)
    console.log(err.errors)
})