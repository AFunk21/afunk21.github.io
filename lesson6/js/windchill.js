let temp = parseFloat(document.querySelector("#temp").textContent);
let wind = parseFloat(document.querySelector("#wind").textContent);

if (temp <= 50 && ((wind) => 3)) {
    let wc = windChill(temp, wind);
    document.querySelector("#windchill").textContent = wc.toFixed(0);
} else {
    document.querySelector("#windchill").textContent = "-";
}

function windChill(temp, wind) {
    let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16);
    return wc;
}