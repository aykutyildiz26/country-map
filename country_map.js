var userInput = document.querySelector("#user-input")
var data = document.querySelector("#data")
const selectBtn = document.querySelector("#select-btn")
const deleteBtn = document.querySelector("#delete-btn")
const showBtn = document.querySelector("#show-btn")

var country1 = {
    name: "England",
    capital: "London",
    population: "56 million"
}
var country2 = {
    name: "Netherlands",
    capital: "Amsterdam",
    population: "17 million"
}
var country3 = {
    name: "United States",
    capital: "Washington D.C",
    population: "330 million"
}
let sum = 0

var countries = [country1,country2,country3]


function countryMap(){
    data.innerHTML = ""
    for(var i = 0; i < countries.length; i++){
        sum += i
        data.innerHTML += countries[i].name + '<br>' + "<br>"
    }
    data.innerHTML += "number of countries: " + countries.length
}

function capitalizeFirstLetter(){
    userInput.value = userInput.value.charAt(0).toUpperCase() + userInput.value.slice(1)
}


showBtn.addEventListener("click", function(){
    countryMap()
})

selectBtn.addEventListener("click", function(){
    capitalizeFirstLetter()
    for(var i = 0; i < countries.length; i++){
        if(userInput.value == countries[i].name){
            data.innerHTML = countries[i].name + '<br>' + " population: "+ countries[i].population
        }
    }
})

deleteBtn.addEventListener("click", function(){
    capitalizeFirstLetter()
    var i = 0
    while(i<countries.length){
        if(userInput.value == countries[i].name){
            countries.splice(i, 1)
        }
        else{
            i++
        }
    }
})

