//let wind = parseFloat(document.querySelector("#wind").textContent);
//let temp = parseFloat(document.querySelector("#temp").textContent);


const temp = document.querySelector('#temp').textContent;
const wind = document.querySelector('#wind').textContent;

if (parseInt(temp) <= 50 && parseInt(wind) > 3) {
    const windchill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16);
    const wc_round = Math.round(windchill);  
    document.querySelector('#windchill').textContent = wc_round;
} 
