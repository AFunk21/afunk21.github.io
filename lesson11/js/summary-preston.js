// combined my windchill and api together from the windchill assignment, week 6.
// const cityid = "5604473"
// const APPID = "7cdd4c49d24edd9b9fc476ef7cdd7ff4" 
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=7cdd4c49d24edd9b9fc476ef7cdd7ff4&units=imperial";

fetch(apiURL) // from the weather activity
  .then((response) => response.json()) // from the weather activity
  .then((jsObject) => { // from the weather activity
    //console.log(jsObject);
    let weather = jsObject //referencing structure from my week 9 assingment - info.js file
    let currentTemp = weather.main.temp //referencing structure from my week 9 assingment - info.js file
    let wind = weather.wind.speed; //referencing structure from my week 9 assingment - info.js file
    let temp = weather.weather[0].description; //referencing structure from my week 9 assingment - info.js file
    let humidity = weather.main.humidity; //referencing structure from my week 9 assingment - info.js file
    const mySentence = temp; //referencing structure from my week 9 assingment - info.js file
    const current = mySentence.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    

    // windchill dode from previous assingment, with some adjusments 
    if (parseInt(currentTemp) <= 50 && parseInt(wind) > 3) {
        const windchill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16);
        const wc_round = Math.round(windchill);  
        document.querySelector('#windchill').textContent = wc_round;
    } else {
        document.querySelector('#windchill').textContent = "N/A";
    }
    document.getElementById('current').textContent = current;
    document.getElementById('temperature').textContent = currentTemp;
    document.getElementById('wind-speed').textContent = Math.round(wind);
    document.getElementById('humidity').textContent = humidity;
  });

