const colorBtn = document.getElementById("color")
const placeBtn = document.getElementById("place")
const ritiualBtn = document.getElementById("ritual")




function colorAlert() {
    alert("My favorite color is green")
}

function placeAlert() {
    alert("My favorite place is Yellowstone")
}

function ritualAlert() {
    alert("My favorite rituial is drinking coffee in the morning")
}

colorBtn.addEventListener("click", colorAlert);
placeBtn.addEventListener("click", placeAlert);
ritiualBtn.addEventListener("click", ritualAlert);


console.log("hello")