function NumberOfDays(start, end) {
    const oneDay = 1000 * 60 * 60 * 24;

    const differenceInTime = end - start;

    const diffInDays = Math.round(diffInTime / oneDay);

    return diffInDays;
}

document.querySelector("span.visit").innerHTML = NumberOfDays(
    new Date(localStorage.getItem("date")),
    new Date()
);

localStorage.setItem("date", new Date());