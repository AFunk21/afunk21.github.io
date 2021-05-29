//let wind = parseFloat(document.querySelector("#wind").textContent);
//let temp = parseFloat(document.querySelector("#temp").textContent);


//if (temp <= 50 && ((wind) => 3)) {
//    let wc = windChill(temp, wind);
//        document.querySelector("#windchill").textContent = wc.toFixed(0);
//} else {
//    document.querySelector("#windchill").textContent = "-";
//}

//function windChill(temp, wind) {
//    let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16);
//    return wc;
//}

const temp = document.querySelector('#temp').textContent;
const wind = document.querySelector('#wind').textContent;

if (parseInt(temp) <= 50 && parseInt(wind) > 3) {
    const windchill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16);
    const wc_round = Math.round(windchill);  
    document.querySelector('#windchill').textContent = wc_round;
} 
else {
    document.querySelector('#windchill').textContent = "N/A";
}