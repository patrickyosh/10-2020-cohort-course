var currentPosition = 0;

function prev() {
    if(currentPosition > -1000)
    document.getElementById("jsCarousel").style.transform = `translateX(${currentPosition}px)`;
        "translateX(" + currentPosition + "px)";
}
function next() {
    console.log("i work");
    currentPosition -= 500;
    document.getElementById("jsCarousel").style.transform = 
    "translateX(" + currentPosition + "px)";
}

function prev(){
    // set up an if statement
    // check the current position
    // make sure not out of bounds from positive and negative
}