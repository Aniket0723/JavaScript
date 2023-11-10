var empDetails = {
  name: "John",
  age: 25,
  expertise: "Software Developer",
};

var empDetailsShallowCopy = empDetails;
//Shallow copying!
empDetailsShallowCopy.name = "Johnson";
console.log(empDetails.name)
console.log(empDetailsShallowCopy.name)

//Deep Copy
let user = {
  name: "Ashutosh",
  age: 25,
  expertise: "Software Developer",
};
console.log(user.name)
console.log(user.expertise)
var objClone={
    name:user.name,
    age:user.age,
    expertise:user.expertise
}
objClone.name ="Aniket"
objClone.expertise="Web Developer"
console.log(objClone.name)
console.log(objClone.expertise)
