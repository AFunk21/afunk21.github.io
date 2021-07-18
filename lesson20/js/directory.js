
fetch(("./directory.json")) 
    .then(function (response) {
    return response.json();
})
// text from assingment
.then(function (jsonObject) {
console.table(jsonObject);

const business = jsonObject['business'];

for (let i = 0; i < business.length; i++ ) {
        let card = document.createElement("section");
        let h2 = document.createElement("h2");
        let website = document.createElement("a")
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let img = document.createElement("img");


        h2.textContent = business[i].name;
        website.textContent = business[i].website;
        address.textContent = business[i].address; 
        phone.textContent = business[i].phone; 
        img.setAttribute("src", 'images/' + business[i].imageurl);
        img.setAttribute("alt", business[i].alternate);
        //img.setAttribute("href", `${business.website}!`);

        card.appendChild(img);
        card.appendChild(h2);
        card.appendChild(address);
        card.appendChild(phone);

        document.querySelector("div.cards").appendChild(card);
    }
});

//card.append(`<a href="` + website + `" >` + h2 + `</a>`);
//card.append('<a href=' + website + '" >' + h2 + '</a>');
//business[i].link + ' ' + 