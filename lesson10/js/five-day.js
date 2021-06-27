
const forecastURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=7cdd4c49d24edd9b9fc476ef7cdd7ff4&units=imperial"; //weather api activity - website

fetch(forecastURL) // from the preston weather activity
    .then((response) => response.json()) // from the preston weather activity
    .then((jsObject) => { // from the preston weather activity
        const fiveDay = jsObject.list.filter ((forecast) => forecast.dt_txt.includes("18:00:00")); // "filter", "forecast.list", and "dt_txt.includes()" recomendatios from the assignment page
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']; // setting string of days
        console.log(fiveDay); // from the preston weather activity

        fiveDay.forEach( x => {// from the preston weather activity
            const currentDate = new Date(forcast.dt_txt); // calling the day
            const weekDay = days[currentDate.getDay()]; // calling the day of the week
            const dayHigh = Math.round(forecast.main.temp_max); // calling for the temperature
            const imagesrc = 'https://openweathermap.org/img/wn/' + forcast.weather[0].icon + '.png'; 

            let dayContainer = document.createElement('div'); //referencing structure from my week 9 assingment - info.js file 
            let weekDayContainer = document.createElement('p'); //referencing structure from my week 9 assingment - info.js file
            let forecastImg = document.createElement('img'); //referencing structure from my week 9 assingment - info.js file
            let dayHighTemp = document.createElement('p'); //referencing structure from my week 9 assingment - info.js file

            weekDayContainer.textContent = weekDay; //referencing structure from my week 9 assingment - info.js file
            forecastImg.setAttribute('src', imagesrc); //referencing structure from my week 9 assingment - info.js file
            forecastImg.setAttribute('alt', "Weather Icon"); //referencing structure from my week 9 assingment - info.js file
            dayHighTemp.textContent = dayHigh + ' °F'; //referencing structure from my week 9 assingment - info.js file

            dayContainer.classList.add("five-day"); //referencing structure from my week 9 assingment - info.js file
            dayContainer.appendChild(weekDayContainer); //referencing structure from my week 9 assingment - info.js file
            dayContainer.appendChild(forecastImg); //referencing structure from my week 9 assingment - info.js file
            dayContainer.appendChild(dayHighTemp); //referencing structure from my week 9 assingment - info.js file

            document.querySelector('forcast-box').appendChild(dayContainer); //referencing structure from my week 9 assingment - info.js file

            console.log(forecastImg) //referencing structure from my week 9 assingment - info.js file
            
    });
});