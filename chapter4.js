//ITERABLES
//Iterable Protocol
//Symbol.iterator proprterty as a function honi chiaye
//Are object in which we can make array like iteration
// using forOf loop of spread operators
// array ki tarah iterate/loop laga sakte ho kar sakte ho

// Iterator Protocol
// object k under ek next method ho
// {value:-some-value-,done:-boolean-}
// value are like any value
// done when to stop or condition

let range = {
  start: 0,
  end: 5,
  [Symbol.iterator]() {
    let that = this;
    let i = this.start;
    return {
      next: function () {
        return { value: i, done: i++ > that.end };
      },
    };
  },
};

for (let r of range) {
  // console.log(r)
}
// console.log([...range])

//Array is iterable
let arr = [1, 2, 3];
let it = arr[Symbol.iterator]();
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

//Conversion
//Array-like object are based on array protools (index and length)
//Array-like to Array
//Array.form():
let arrayLike = {
  0: 0,
  1: 5,
  length: 2,
};
// console.log(Array.from(arrayLike))

//MAP
//This data type is also iterable
//har tarah ki keys allowed hoti hai
//speacial this is can have keys also as numbers,booleans,objects
//also map maintains the order of keys added

//set and get
//oject refernce se chalte
//map.set
//map.get
//map.size
//map.keys() --> iterables of keys
//map.values() --> Iterable of Values
//map.entries() --> Iterable of key-value pair
//map.has()

// let map = new Map()
// let person = {name:'Aniket'}
// let personAccount = {balance: 5000}
// map.set('1','str1');
// map.set(1,'num1')
// map.set(true,'bool1')
// map.set(person,personAccount)

// console.log(map.values())

//CONVERTING Object to Map
// Object.entries()

let obj = { a: 1, b: 2, c: 3 };
let map = new Map(Object.entries(obj));
// console.log(obj)
// console.log(map)

// CONVERTING Map to Object
// Object.fromEntries()

let map2 = new Map();
map2.set("a", 10);
map2.set("b", 20);
map2.set("c", 30);

let obj2 = Object.fromEntries(map2.entries());
// console.log(map2)
// console.log(obj2)

//SET
//Set only contains unique elements
//set only stored values not keys

let set = new Set();
let p1 = { name: "ANIKET" };
let p2 = { name: "ASHUTOSH" };
let p3 = { name: "YASH" };

set.add(p1);
set.add(p2);
set.add(p3);
set.add(p3);
// console.log(set)
// console.log(set.values())
// console.log(set.keys())
// console.log(set.entries())
// keys and values are same in set

//Generators
// Iterators aur iterable ko easily banane k liye
function* generatorFunction() {
  yield 1;
  yield 2;
  yield 3;
}

let generator = generatorFunction();
// console.log([...generator])
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())

//Genrator Iterable bhi hai

//Infinite Iterator

function* generateFunction() {
  let i = 0;
  while (true) {
    //infinite loop
    yield i;
    i++;
  }
}

let g = generateFunction();
// console.log(g.next())
// console.log(g.next())
// console.log(g.next())
// console.log(g.next())
// console.log(g.next())
// console.log(g.next())
// console.log(g.next())
// console.log(g.next())

let range1 = {
  start: 0,
  end: 5,
  *[Symbol.iterator]() {
    for (let value = this.start; value <= this.end;value++ ) yield value;
  },
};

for (let r of range1) {
  // console.log(r);
}

function* range2(start,end){
  for(let value=start;value<=end;value++){
    yield value;
  }
}

for(let r of range2(2,5)){
  console.log(r)
}
