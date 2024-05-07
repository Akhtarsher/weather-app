

function getWeather() {
const apiKey = 'c2990a0e5bc6b4cd6e1bbf07b3ccb70b';
let city = document.getElementById("input-city").value;
let myCity = document.getElementById('city');
let icon = document.getElementById('icon');
let desc = document.getElementById('desc');
let temp = document.getElementById('temp');
let feelsLike = document.getElementById('feelsLike');
let humidity = document.getElementById('Humidity'); // Corrected typo in ID

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl)
.then(response => {
    console.log(response.data); // Log the response data to check if it's retrieved successfully

    // Update city name
    myCity.textContent = response.data.name;
    myCity.classList.remove('hide');

    // Update temperature
    temp.textContent = response.data.main.temp + " °C";
    temp.classList.remove('hide');

    // Update weather description
    desc.textContent = response.data.weather[0].description;
    desc.classList.remove('hide');

    // Update humidity
    humidity.textContent = "Humidity: " + response.data.main.humidity + "%";
    humidity.classList.remove('hide');

    // Update feels like temperature
    feelsLike.textContent = "Feels Like: " + response.data.main.feels_like + " °C";
    feelsLike.classList.remove('hide');

  
})
.catch(error => {
    console.error('Error fetching weather data:', error);
});
}


