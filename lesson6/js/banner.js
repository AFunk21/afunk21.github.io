let thedate = new Date()
console.log(thedate.getDate())

if (thedate.getDay() == 5) {
    document.querySelector('#banner').style.display = 'block';
}
