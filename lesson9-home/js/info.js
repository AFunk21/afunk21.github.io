const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const towns = jsonObject["towns"];

        const three = towns.filter((town) =>
            town.name == "Preston" ||
            town.name == "Soda Springs" ||
            town.name == "Fish Haven"
        );

        three.forEach((town) => {
            let town = document.createElement("section");
            let h2 = document.createElement("h2");
            let motto = document.createElement("p");
            let year = document.createElement("p");
            let pop = document.createElement("p");
            let rain = document.createElement("p");
            let image = document.createElement("img");

            h2.textContent = town.name;
            motto.textContent = `"${town.motto}"`;
            year.textContent = `Year Founded: ${town.yearFounded}`;
            pop.textContent = `Population: ${town.currentPopulation}`;
            rain.textContent = `Annual Rain Fall: ${town.averageRainfall}`;
            image.setAttribute("src", `images/${town.photo}`);
            image.setAttribute("alt", `A landscape picture of ${town.name}!`);

            town.appendChild(h2);
            town.appendChild(motto);
            town.appendChild(year);
            town.appendChild(pop);
            town.appendChild(rain);
            town.appendChild(image);

            document.querySelector("div.towns").appendChild(town);
        });
    });