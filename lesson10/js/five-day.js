
const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=7cdd4c49d24edd9b9fc476ef7cdd7ff4&units=imperial";

 //weather api activity - website

fetch(forecastURL) // from the preston weather activity
    .then((response) => response.json()) // from the preston weather activity
    .then((jsObject) => { // from the preston weather activity
        const fiveDayForecast = jsObject.list.filter ( forecast => forecast.dt_txt.includes("18:00:00")); // "filter", "forecast.list", and "dt_txt.includes()" recomendatios from the assignment page
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']; // setting string of days
        console.log(fiveDayForecast); // from the preston weather activity

        fiveDayForecast.forEach( fore_cast => {// from the preston weather activity
            const currentDate = new Date(fore_cast.dt_txt); // calling the day
            const weekDay = days[currentDate.getDay()]; // calling the day of the week
            const temp = Math.round(forecast.main.temp_max); // calling for the temperature
            const imagesrc = 'https://openweathermap.org/img/wn/' + fore_cast.weather[0].icon + '.png'; 

            let dayContainer = document.createElement('div'); //referencing structure from my week 9 assingment - info.js file 
            let forecastImg = document.createElement('img'); //referencing structure from my week 9 assingment - info.js file
            let fiveDayContainer = document.createElement('p'); //referencing structure from my week 9 assingment - info.js file
            let dayTemp = document.createElement('p'); //referencing structure from my week 9 assingment - info.js file
            
            forecastImg.setAttribute('src', imagesrc); //referencing structure from my week 9 assingment - info.js file
            forecastImg.setAttribute('alt', "weather icon"); //referencing structure from my week 9 assingment - info.js file
            fiveDayContainer.textContent = weekDay; //referencing structure from my week 9 assingment - info.js file
            dayTemp.textContent = temp + ' °F'; //referencing structure from my week 9 assingment - info.js file

            dayContainer.classList.add("container"); //referencing structure from my week 9 assingment - info.js file
            dayContainer.appendChild(forecastImg); //referencing structure from my week 9 assingment - info.js file
            dayContainer.appendChild(fiveDayContainer); //referencing structure from my week 9 assingment - info.js file
            dayContainer.appendChild(dayTemp); //referencing structure from my week 9 assingment - info.js file

            document.querySelector('forecast-box').appendChild(dayContainer); //referencing structure from my week 9 assingment - info.js file

            console.log(forecastImg) //referencing structure from my week 9 assingment - info.js file

    });
});