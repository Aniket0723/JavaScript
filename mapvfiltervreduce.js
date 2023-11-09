// MAP
// the map method is used for creating a
//new array from existing one by applying
//a function to each one of the elements
//of the first array

const nums = [1,2,3,4]
// multiply by 5
const multiply3 = nums.map((num,i,arr)=>{
    return num*3;
})
//map takes callback function
//functiona takes 3 things
// 1st nums 2nd index 3rd array
console.log(multiply3)


//FILTER 
//the filter method takes each element in an array
//and it applies the conditional statement against it
//if the condition returns true it gets pushed in output 
//array 

const morethan2 = nums.filter((num)=>{
    return num>2;
})
// console.log(morethan2)

//REDUCE
//the reduce method reduces an array of values 
//down to just 1 value
//arguments --->accumulator ,the current value,the index and our array
//accumulator --> the result of previous computation initialy 0
const sum = nums.reduce((acc,curr,i,arr)=>{
    return acc + curr
},0)
console.log(sum)



//POLYFILL FOR MAP
//this.length reference to parent array
Array.prototype.myMap = function(cb){
    let temp =[];
    for(let i=0;i<this.length;i++){
        temp.push(cb(this[i],i,this))
        //current element , index, array
    }
    return temp;
}
const nums1 = [1,2,3,4]

const multiplies3 = nums.myMap((num,i,arr)=>{
    return num*3+i;
})

// console.log(multiplies3)


//POLYFILL FOR FILTER
Array.prototype.myfilter = function(cb){
    let temp =[];
    for(let i=0;i<this.length;i++){
        if(cb(this[i],i,this)){
            temp.push(this[i])
        }
    }
    return temp;
}
const morethan1 = nums1.filter((num)=>{
    return num>1;
})
// console.log(morethan1)

//POLYFILL FOR REDUCE
//arr.reduce((acc,curr,index,array)=>{},initialvalue)

Array.prototype.myReduce = function (cb,initialvalue){
    var accumulator = initialvalue;
    for(let i=0;i<this.length;i++){
        accumulator=accumulator?cb(accumulator,this[i],i,this):this[i];
    }
    return accumulator;
}

const sum1 = nums.myReduce((acc,curr,i,arr)=>{
    return acc + curr+1
},0)
// console.log(sum1)


// map vs ForEach
// both are function that loops through items of array

// const arr =[ 2,5,3,4,6]
// const mapArr = arr.map((arr)=>{
//     return arr+2;
// })
// console.log(mapArr)

// const forEach = arr.forEach((ar,i)=>{
//     arr[i]= ar+23;
// })
// console.log(arr)
// console.log(forEach)


//Return only names os students in capital letter
let students =[
    {name:"Aniket",rollNo:1,marks:100},
    {name:"Ani1",rollNo:2,marks:60},
    {name:"Ani2",rollNo:3,marks:30},
    {name:"Ani3",rollNo:4,marks:50},
    {name:"Ani4",rollNo:5,marks:48}
]
const names = students.map((items)=>{
    return items.name.toUpperCase()
}
)
// console.log(names)

//Return only names of students who scored more than 60 marks

const morethan60 = students.filter((item)=>{
    return item.marks>60
})
// console.log(morethan60)

// Return the names more than 50 and roll no greter than 1

const result = students.filter((item)=>{
    return item.marks>60 && item.rollNo>2
})
// console.log(result)

// Retrun sum of marks of all of the students

const sumtotal = students.reduce((acc,curr)=>acc+curr.marks,0)
// console.log(sumtotal)

// Return only names of students who scored more than 40

const names40 = students.filter((item)=>{
    return item.marks>40
}).map(item=>item.name)
console.log(names40)

//Return total marks for students with marks greater 
//than 60 after 20 marks have been added to tose wjo scored
// less than 60

const totalMarks = students.map((item=>{
    if(item.marks<60){
        item.marks +=20;
    }
    return item
})).filter((item)=>item.marks>60).reduce((acc,curr)=>acc+=curr.marks,0)
console.log(totalMarks)