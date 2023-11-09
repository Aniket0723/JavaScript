//Throttling
//helps in infinte scrolling effect
// It is a technique to limit the execution of event handle function
// Even when this event trigger continously due to user action

const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

var pressedCount = 0;
var triggerCount = 0;

const start = new Date().getTime();

const myThrottle =(cb,delay)=>{
    let last =0;

    return (...args) =>{
        let now = new Date().getTime();
        if(now - last<delay) return;
        last = now
        return cb(...args)
    }

}

const throttledCount = myThrottle(()=>{
    triggerCount += 1;
    count.innerHTML = triggerCount;
    
},5000)

//using loadash lib
// const throttledCount = _.throttle(()=>{
//     const now = new Date().getTime();
//     console.log(now-start)
//     count.innerHTML =++triggerCount;
//     console.log(triggerCount)
// },5000)

btn.addEventListener('click',()=>{
    btnPress.innerHTML =++pressedCount;
    throttledCount();
})