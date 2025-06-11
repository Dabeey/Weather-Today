const apiKey="88742b321bd38721f4234620b765c951";
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');

async function checkWeather(city) {
    const response = await fetch(`${apiUrl}&q=${city}&appid=${apiKey}`);
    // if (!response.ok) {
    //     throw new Error('Network response was not ok');
    // }
    var data = await response.json();

    console.log(data)

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector('.humidity').innerHTML = Math.round(data.main.humidity) + '%';
    document.querySelector('.wind').innerHTML = Math.round(data.wind.speed) + 'km/h';

}

searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value);
})