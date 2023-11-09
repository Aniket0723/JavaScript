//Functions
// function are objects

// function sayHi(name){
//     return name
// }
// console.log(sayHi('Aniket'))
// sayHi.name
// sayHi.length

//function declaration are hoisted

//function can be called as consrtuctor

//Named function expression (NFE)
// let sayHello = function fx(user){
//   if(user){
//     return "Hello " + user
//   }else{
//     return fx('anonymous')
//   }
// }

// console.log(sayHello('Aniket'))

// Decorator
// it is a design pattern in which you modify the functionality
// of a function by covering it inside a wrapper

// predefined function ko wrappe

// let modified = Decorator(preDefinedFix);

//Memoization(Caching)
// Caching koi bhi chiz ki jaa sakti
// Memoization only on function k output /return vaalue

// function heavy(x) {
//     // console.log(x + ':heavy')
//     return x + ':heavy'
// }
// heavy(4)

//optimize karne k liye agar program me baar baar
// jab heavy me value pass ho to usko clauclate kar leke aur store
// karke rakh lenge

//Decorator pattern

// function memoizer(fx) {
//     //bhaer aisi chiz rakh le jisse store karlete hai using map

//     let map = new Map();//hashmap

//     return function (x) {

//         if (map.has(x)) {
//             return map.get(x)
//         }
//         else {
//             let result = fx(x);//heavy function should not be call
//             map.set(x, result);
//             return result
//         }
//     }
// }
// let memoizedHeavy = memoizer(heavy)

// memoizedHeavy(4)
// memoizedHeavy(3)
// memoizedHeavy(2)
// memoizedHeavy(3)//ye function nhi chala lekin result aya hai

///////////////////////////////////
//Memoization in object

// let task = {
//     name: 'Aniket',
//     heavy(x) {
//         console.log(x + ':heavy:' + this.name);
//         return x + ":heavy" + this.name
//     }
// }

// function memoized(fx){
//     let map = new Map();
//     //method
//     return function (x){
//         if(map.has(x)){
//             return map.get(x);
//         }
//         else{
//             memoValue = fx.call(this,x);
//             map.set(x,memoValue);
//             return memoValue
//         }
//     }
// }
// task.heavy(1);
// task.memoizedHeavy = memoized(task.heavy)
// task.memoizedHeavy(1)
// task.memoizedHeavy(2)
// task.memoizedHeavy(1)
// task.memoizedHeavy(1)

//Debounce me pichle sare call cancel hoke jo last call hai
// wohi chalna chiaye
//Ek function ko tabhi chalana hai jab wo function kuch second
//tak call nhi hua ho example-
//Run a function only when - if it has not been called again
// for a fixed period

let count = 1;
function showCount() {
  count++;
  console.log({ count });
}
// function debounce(fx, time) {
//     let id = null;
//     return function (x) {
//         if (id) {
//             clearTimeout(id)

//             // console.log(id)
//         }
//          id = setTimeout(fx, time,x)
//     }
// }
// //agar setTimeout me function execute hua hai
// //ye execute nhi ho pata hai aur useke phle aur ek call ata hai
// //purna wala setTimeout cancel ho jaye

// let showCountD = debounce(showCount, 1000);//isse delayed function ban gaya hai
// // showCountD()
// // showCountD()
// // showCountD()

// setTimeout(showCountD,1000);
// setTimeout(showCountD,2100);
// setTimeout(showCountD,3200);
// setTimeout(showCountD,4300);
// setTimeout(showCountD,5400);

// const el = document.getElementById("text1");
// const logo = document.getElementById("text-output1");

// el.addEventListener(
//   "keyup",
//   debounce(function (e) {
//     console.log(e)
//     logo.innerText = e.target.value;
//   },1000)
// );

//Throttle
//agar koi event ho rahe hai to me period of time me
// kch hi ativity ya exceution ko chalaunga
// rate limiting

// document.addEventListener('scroll',function(e){
//     console.log(e)
// })
function throttle(fx, time) {
  let id = null;
  let args = [];
  return function (x) {
    if (!id) {
      id = setTimeout(()=>{
        fx(args[args.length-1])
        id=null;
      }, time );
    }
    args.push(x);
  };
}

let showCounT = throttle(showCount, 3000);
setTimeout(showCounT, 1000);
setTimeout(showCounT, 2200);
setTimeout(showCounT, 2500);
setTimeout(showCounT, 5000);
