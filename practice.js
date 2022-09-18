let date = new Date();

let year = date.getFullYear();

let current_date = document.lastModified;

document.querySelector('.year').textContent = year;

document.querySelector('.updated').textContent = current_date;