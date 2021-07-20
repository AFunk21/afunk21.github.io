
fetch(("./directory.json")) 
    .then(function (response) {
    return response.json();
})

.then(function (jsonObject) {
console.table(jsonObject);

const business = jsonObject['business'];

for (let i = 0; i < business.length; i++ ) {
        let card = document.createElement("section");
        //let link = document.createElement("a");
        let h2 = document.createElement("h2");
        let website = document.createElement("a");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let img = document.createElement("img");


        h2.textContent = business[i].name;
        
        address.textContent = business[i].address; 
        phone.textContent = business[i].phone; 
        img.setAttribute("src", business[i].imageurl);
        img.setAttribute("alt", business[i].alternate);
        website.textContent = business[i].website; 
        website.setAttribute("href", business[i].website);

        card.appendChild(img);
        card.appendChild(h2);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        document.querySelector("div.cards").appendChild(card);
        //document.querySelector("div.cards.link").appendChild(card);
    }
});

// ----------------------- Note ------------------------------
// I was trying to make the whole section be a link or "a href"
// but I could not figure it out. The other green comments are 
// my attempts to make it work but after hours I decided to just
// put the a tag on there and do it that way. 

// I think I still meet the requirements according to the assingment 
// but I was wanting to make it better.

//card.append(`<a href="` + website + `" >` + h2 + `</a>`);
//card.append('<a href=' + website + '" >' + h2 + '</a>');
//business[i].link + ' ' + 