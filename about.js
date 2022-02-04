console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form submitted successfully!")
}

function duckAlert() {
	alert("You're an absoulute unit!")
}


let form = document.querySelector('form#contact');
let duck = document.querySelector("img")
form.addEventListener('submit', handleSubmit);
duck.addEventListener("mouseover", duckAlert)