let resturantList = [`Mejia's Mexican Food`, `Island Bowl Grill`, `Bigg J Burgers`, `Mis Amores Mexican Restaurant`, `Pizza Villa`, `El Tapatio Restaurante`, `Golden City Restaurant`, `The Charcoal Grill`, `New York Strip Steakhouse and Deli`]

const randomRestaurantButton = document.getElementById(`random-restaurant`)
const randomRestaurantText = document.getElementById(`random-restaurant-text`)

function generateRandomRestaurant(e){
    e.preventDefault()
    console.log(`Click`)
    console.log(resturantList[Math.floor(Math.random()) * resturantList.length])
}

randomRestaurantButton.addEventListener(`click`, (e)=> {
    e.preventDefault()
    let newRestaurant = document.createElement(`H1`)
    console.log(resturantList[Math.floor(Math.random()* resturantList.length)])
    randomRestaurantText.textContent = resturantList[Math.floor(Math.random()* resturantList.length)]
})
