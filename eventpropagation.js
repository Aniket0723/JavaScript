// Event Propagation 
// Event Propagation determines in which order the elements receive the event. 

// Event Bubbling 
// Down to Up 
// When an event happens on a component, it first runs the event handler on it, 
// then on its parent component, then all the way up on other ancestors’ components.
// few event do not buble up focus blur

const div = document.querySelector('div')
const form = document.querySelector('form')
const button = document.querySelector('button')

// div.addEventListener('click',function(){
//     alert("div");
// })
// form.addEventListener('click',function(){
//     alert("form");
// })
// button.addEventListener('click',function(){
//     alert("button");
// })

// event.target vs this.target vs event.currentTarget

// div.addEventListener("click",click);
// form.addEventListener("click",click)
// button.addEventListener("click",click)

// function click(event){
//     alert("currentTarget = "+ event.currentTarget.tagName +
//     ", target = " +
//     event.target.tagName +
//     ", this = "+
//     this.tagName)
// }

// Event Capturing /Trickling 
// It is the opposite of bubbling. The event handler is first on its parent component 
//and then on the component where it was actually wanted to fire that event handler. 
//In short, it means that the event is first captured by the outermost element and 
//propagated to the inner elements. It is also called trickle down.

// div.addEventListener('click',function(){
//     alert("div");
// },{
//     capture:true,
// })
// form.addEventListener('click',function(){
//     alert("form");
// },{
//     capture:true,
// })
// button.addEventListener('click',function(){
//     alert("button");
// },{
//     capture:true,
// })

// How to Stop Bubbling Capturing 
// Stop propagation


div.addEventListener('click',function(e){
    // e.stopPropagation()
    alert("div");
})
form.addEventListener('click',function(e){
    e.stopPropagation()
    alert("form");
})
button.addEventListener('click',function(e){
    // e.stopPropagation()
    alert("button");
})


