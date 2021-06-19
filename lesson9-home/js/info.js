const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json'; // text from assingment

// text from assingment
fetch(requestURL) 
    .then(function (response) {
    return response.json();
})
// text from assingment
.then(function (jsonObject) {
console.table(jsonObject);

const towns = jsonObject['towns'];

for (towns[i].name == "Soda Springs" || towns[i].name == "Fish Haven" || towns[i].name == "Preston") {
    let town = document.createElement('section');
    let text = document.createElement('div')
    let h2 = document.createElement('h2');
    let motto = document.createElement('p')
    let founded = document.createElement('p')
    let population = document.createElement('p')
    let rainfall = document.createElement('p')
    let img = document.createElement('img')

    text.classList.add('town-text')
    

    h2.textContent = towns[i].name;
    motto.textContent = towns[i].motto;
    founded.textContent = 'Year Founded: ' + towns[i].yearFounded;
    population.textContent = 'Population: ' + towns[i].currentPopulation;
    rainfall.textContent = 'Average Rainfall: ' + towns[i].averageRainfall;
    img.setAttribute('src', 'images/' + towns[i].photo);
    img.setAttribute('alt', towns[i].name)

    text.appendChild(h2);
    text.appendChild(motto)
    text.appendChild(founded);
    text.appendChild(population);
    text.appendChild(rainfall);
    town.appendChild(text)
    town.appendChild(img);

    document.querySelector('div.cards').appendChild(card); // text from assingment
        
    }
});