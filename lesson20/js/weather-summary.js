// const APPID = "7cdd4c49d24edd9b9fc476ef7cdd7ff4" 
// const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=7cdd4c49d24edd9b9fc476ef7cdd7ff4&units=imperial";

const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=32.939861&lon=-97.078369&units=imperial&exclude=minutely&appid=7cdd4c49d24edd9b9fc476ef7cdd7ff4"

fetch(apiURL) // from the weather activity
  .then((response) => response.json()) // from the weather activity
  .then((jsObject) => { // from the weather activity
    //console.log(jsObject);
    let onecall = jsObject 
    let current = onecall.hourly.description; 
    let currentTemp = onecall.hourly.temp; 
    let wind = onecall.hourly.wind_speed; 
    let humidity = onecall.hourly.humidity; 
    const mySentence = current; 
    const description = mySentence.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    

    document.getElementById('description').textContent = current;
    document.getElementById('temperature').textContent = currentTemp;
    document.getElementById('wind-speed').textContent = Math.round(wind);
    document.getElementById('humidity').textContent = humidity;
  });

