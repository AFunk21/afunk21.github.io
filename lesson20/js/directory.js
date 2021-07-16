
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
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let image = document.createElement("img");

        h2.textContent = business[i].name + ' ' + business[i].name; 
        address.textContent = 'Address: ' + business[i].address ; 
        phone.textContent = 'Phone: ' + business[i].phone; 
        img.setAttribute('src', business[i].imageurl, ); 

        card.appendChild(image);
        card.appendChild(h2);
        card.appendChild(address);
        card.appendChild(phone);

        document.querySelector("div.cards").appendChild(card);
    }
});