// combined my windchill and api together from the windchill assignment, week 6.
const cityid = "5604473"
const APPID = "7cdd4c49d24edd9b9fc476ef7cdd7ff4"
const apiURL = "api.openweathermap.org/data/2.5/weather?id={cityid}&appid={APPID}&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
    let weather = jsObject
    let currentTemp = weather.main.temp
    let temp = weather.weather[0].description;
    const mySentence = temp;
    const current = mySentence.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());

    let wind = weather.wind.speed;

    let humidity = weather.main.humidity;
    
    if (parseInt(currentTemp) <= 50 && parseInt(wind) > 3) {
        const windchill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16);
        const wc_round = Math.round(windchill);  
        document.querySelector('#windchill').textContent = wc_round;
    } else {
        document.querySelector('#windchill').textContent = "N/A";
    }

    document.getElementById('sum-hum').textContent = humidity;
    document.getElementById('sum-speed').textContent = Math.round(wind);
    document.getElementById('sum-curr').textContent = current;
    document.getElementById('sum-temp').textContent = Math.round(high);
  });




//const temp = document.querySelector('#temp').textContent;
//const wind = document.querySelector('#wind').textContent;

//if (parseInt(temp) <= 50 && parseInt(wind) > 3) {
    //const windchill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16);
    //const wc_round = Math.round(windchill);  
    //document.querySelector('#windchill').textContent = wc_round;
//} else {
    //document.querySelector('#windchill').textContent = "N/A";
//}
