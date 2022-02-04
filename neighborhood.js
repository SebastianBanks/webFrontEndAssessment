const randomPic = document.getElementById("randomPic")
const randomLink = document.getElementById("randomLink")
const randomBtn = document.getElementById("randomBtn")

let places = [{
    pic : "ramen.jpeg",
    link : "https://www.jinyaramenbar.com/menu/cat_type/main/",
    name : "Jinya Bar"
},
{
    pic : "pancake.jpeg",
    link : "https://www.ophutah.com/menu/",
    name : "Original Pancake House"
},
{
    pic : "pizza.jpeg",
    link : "https://flatbreadpizza.com/salt-lake-city/",
    name : "Flat Bread Pizza"
}
]

function getRandomPlace() {
    let randomNum = Math.floor(Math.random() * 3)
    
    randomLink.href = places[randomNum].link
    randomLink.textContent = places[randomNum].name
    randomPic.src = places[randomNum].pic
    randomPic.alt = places[randomNum].name
    
    console.log(randomNum)
}

randomBtn.addEventListener("click", getRandomPlace);

// I was getting a weird error when I added this code to profile.js so I just created a new js file for this