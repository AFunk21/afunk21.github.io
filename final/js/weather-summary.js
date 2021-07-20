
const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=32.939861&lon=-97.078369&units=imperial&exclude=minutely&appid=7cdd4c49d24edd9b9fc476ef7cdd7ff4"

fetch(apiURL) 
  .then((response) => response.json())
  .then((jsObject) => { 
    // console.log(jsObject);
    let onecall = jsObject 
    let current = onecall.current.weather.main; 
    let currentTemp = onecall.current.temp;
    let wind = onecall.current.wind_speed;
    let humidity = onecall.current.humidity;

    // This worked last time, I am not sure why it is not working with the different API url. I included the link where I am getting this from.
    /* const mySentence = temp;
    const finalSentence = mySentence.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    - link: https://www.freecodecamp.org/news/how-to-capitalize-words-in-javascript/ */


    document.getElementById('current').textContent = current;
    document.getElementById('temperature').textContent = currentTemp;
    document.getElementById('wind-speed').textContent = Math.round(wind);
    document.getElementById('humidity').textContent = humidity;
  });


/*

  Notes:

    // - I tried the other ways as well as. I feel like this should be working but maybe one small thing is off. 
    // - When you grade my site and if you have time if you could tell me what I am missing right here I would appreciate it.
    // - I am wondering it my VS code reset somethings when my computer had a major reboot upgrade to the new IOS (mac computer). Thanks again to help me set that back up.

--------------- This is another attempt ----------------- 

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
    const current = mySentence.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());

    document.getElementById('description').textContent = current;
    document.getElementById('temperature').textContent = currentTemp;
    document.getElementById('wind-speed').textContent = Math.round(wind);
    document.getElementById('humidity').textContent = humidity;



    ----------- This is my other attemt. I even tried the notes from the lesson 10 ------------
    --------- it did not like "...`${desc.toUpperCase()}`;..." and I am not sure why ----------

    const currently = document.querySelector("#current");
    const desc = jsObject.current.weather.description;
    currently.innerHTML = `${desc.toUpperCase()}`;

    const temperature = document.querySelector("#temperature");
    temperature.textContent = jsObject.current.temp.toFixed(0);

    const speed = document.querySelector("#wind-speed");
    speed.textContent = jsObject.wind.speed;

    const humidity = document.querySelector("#humidity");
    humidity.textContent = jsObject.main.humidity.toFixed(0);
  }); */

