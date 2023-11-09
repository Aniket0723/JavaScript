// Event delegation
// Event delegation is where we add event listner to parent element
// instead of adding them to descendent element

document.querySelector(".products").addEventListener("click", (event) => {
    console.log(event.target.className)
    // if(event.target.tagName == "SPAN"){
    //     window.location.href = '/' + event.target.className
    // }
});


const container = document.querySelector('.productsconatiner');
const button = document.querySelector('.openButton');

button.addEventListener('click', () => {
    openProducts(true);
});

function openProducts(open) {
    container.style.display = open ? "flex" : "none";
}

document.addEventListener('click', (e) => {
    // Check if the clicked element is not a child of the products container
    // if (!container.contains(e.target) && e.target !== button) {
    //     openProducts(false);
    // }
    if(e.target.className ==! "productsconatiner")
    openProducts(false);

});
