const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json'; // text from assingment

// text from assingment
fetch(requestURL) 
    .then(function (response) {
    return response.json();
})
// text from assingment
.then(function (jsonObject) {
console.table(jsonObject);

const prophets = jsonObject['prophets'];

for (let i = 0; i < prophets.length; i++ ) {
        let card = document.createElement('section'); // text from assingment
        let h2 = document.createElement('h2'); // text from assingment
        let birthDate = document.createElement('p') 
        let birthPlace = document.createElement('p') 
        let img = document.createElement('img') 

        h2.textContent = prophets[i].name + ' ' + prophets[i].lastname; // text from assingment
        birthDate.textContent = 'Date of Birth: ' + prophets[i].birthdate ; // using same format from assingment
        birthPlace.textContent = 'Place of birth: ' + prophets[i].birthplace; // using same format from assingment
        img.setAttribute('src', prophets[i].imageurl, ); // text from assingment

        
        card.appendChild(h2); // text from assingment
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(img);

        document.querySelector('div.cards').appendChild(card); // text from assingment
        
    }
});

