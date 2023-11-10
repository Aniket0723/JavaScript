//Debounce
//It limits the execution of function call and wait for
//a certain amount of time before running it again

//QUE 1 - Create a button UI and add debounce as follows
//--> Show "Button" Pressed <x> times every time button is pressed
//--> Increase "Triggered" <y> times count after 800ms of debounce

const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

var pressedCount = 0;
var triggerCount = 0;

// //it takes callback and waits time

// const myDebounce = (cb,delay) =>{
//     let timer;
//     return function(...args){
//         if(timer) clearTimeout(timer);
//         // every time we run this my debounce
//         // we have to clear this timeout
//         timer = setTimeout(()=>{
//             cb(...args)
//         },delay)

//     }
// }

// const debouncedCount = myDebounce((count)=>{
//     count.innerHTML =++triggerCount;
//     console.log(triggerCount)
// },800)

// using loadash lib
const debouncedCount = _.debounce(() => {
  count.innerHTML = ++triggerCount;
  console.log(triggerCount);
}, 800);

btn.addEventListener("click", () => {
  btnPress.innerHTML = ++pressedCount;
  debouncedCount(count);
});

//controling the event -> debouncing
const debounce = (fn,delay=1000)=>{
    let timer;//clousre ka use hua hai 
    return(...args)=>{
        clearTimeout(timer)
      timer = setTimeout(() => {
            fn(...args)
        }, delay);
    }
}
//debouncde ek function return karna chiaye 

const handler = async (e) => {
  const response = await fetch(
    `https://dummyjson.com/products/search?q=${e.target.value}`
  );
  const data = await response.json();
  console.log(data.products);
  console.log("event", e.target.value);
};
const input = document.getElementById("input");
const debounced = debounce(handler,1000)
// //1000 ms k baad debounce function call kiya jaye 
// //har ek keystroke k uper
input.addEventListener("input",debounced);

