 //weather api activity - website

 const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=7cdd4c49d24edd9b9fc476ef7cdd7ff4&units=imperial";

 // I pretty much followed along with Bro. Blazard to complete this in the weekly assignment video.

 fetch(forecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let day = 0;
    const dayofWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    const fiveDayForecast = jsObject.list.filter( forecast => forecast.dt_txt.includes('18:00:00'));
    console.log(fiveDayForecast);
    fiveDayForecast.forEach( x => {
        let d = new Date(x.dt_txt);
        
        document.getElementById(`dayofweek${day+1}`).textContent = dayofWeek[d.getDay()];
        document.getElementById(`forecast${day+1}`).textContent = Math.round(x.main.temp);
        
        // Used the same concept for the image by creating an class then specified scr and implemented where to locate it within the url to locate the image.
        document.getElementById(`icon${day+1}`).setAttribute('src', `https://openweathermap.org/img/w/${x.weather[0].icon}.png`);
        day++
    });
});