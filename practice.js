let date = new Date();

console.log(date);

let year = date.getFullYear();

console.log(year);

document.querySelector('h1').textContent = year;

let current_date = document.lastModified;

console.log(current_date);

document.querySelector('div').textContent = current_date;

document.querySelector('.year').textContent = year;

document.querySelector('.updated').textContent = current_date;