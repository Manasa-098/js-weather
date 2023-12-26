function weather() {
    let city = document.getElementById('place').value
    let name = document.getElementById('name');
    let degrees = document.getElementById('degrees');
    let windSpeed = document.getElementById('wind');
    let sunRise = document.getElementById('sunRise');
    let sunSet = document.getElementById('sunSet');

    let humidityRate = document.getElementById('humidity');

    let apiKey = `527a60f6c446f43550df8b9a3d8f1319`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            name.innerHTML = data.name
            degrees.innerHTML = Math.floor(data.main.feels_like - 273) + "°C"
            windSpeed.innerHTML = data.wind.speed + "km/hr"
            humidityRate.innerHTML = data.main.humidity + "%"
            sunRise.innerHTML =data.sys.sunrise
            sunSet.innerHTML =data.sys.sunset

        });

}