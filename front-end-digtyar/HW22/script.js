const input = document.getElementById("input");
const btn = document.getElementById("btn");
const postContainer = document.getElementById("postContainer");
const postItems = document.getElementById("postItemsInTemplate");
let url = new URL('https://api.openweathermap.org/data/2.5/weather?&appid=a8939f2b8df8bc3e1a01dd985a11493d');

btn.addEventListener("click", onButtonClick);

function onButtonClick(){
    if(checkCityAvailability(input.value)){
        url.searchParams.set('q', input.value);
        fetchWeather(url);
    }else {
        alert("Город не найден, попробуй еще раз");
    }
    makeEmptyInput();
}

function fetchWeather(url){
    fetch(url)
    .then(res => res.json())
    .then(data => postWeather(data))
    .catch(err => catchErr(err));
}

function postWeather(weather){
    let html = postItems.innerHTML
    .replace("{{city}}", weather.name)
    .replace("{{temperature}}", getTemperatureInCelsius(weather.main.temp))
    .replace("{{windSpeed}}",weather.wind.speed);

    postContainer.insertAdjacentHTML("beforeend", html); 
    
}

function getTemperatureInCelsius(fahrenheit){
     return Math.floor(fahrenheit - 273.15);
}

function checkCityAvailability(value){
    value.trim(); 
    return value !== "" && value!== undefined;
}

function catchErr(err){
    alert(err);
    makeEmptyInput();
}

function makeEmptyInput(){
    input.value = "";
}

