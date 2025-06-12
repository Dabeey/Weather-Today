// const apiKey="88742b321bd38721f4234620b765c951";

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city) {
    const response = await fetch(`/weather?city=${city}`);
    var data = await response.json();

    console.log(data)

    if (data.error || !data.main) {
        alert('Could not fetch weather data. Please check the city name.');
        return;
    }

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector('.humidity').innerHTML = Math.round(data.main.humidity) + '%';
    document.querySelector('.wind').innerHTML = Math.round(data.wind.speed) + 'km/h';

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png";
    }
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png";
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png";
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png";
    }
    else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "images/snow.png";
    }
}

searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value);
})