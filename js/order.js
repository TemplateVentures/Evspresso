let coffeeBtn = document.getElementById('coffeeHandler');
let souvenirBtn = document.getElementById('souvenirHandler');


let coffeeList = document.getElementById('coffee-list');
let souvenirList = document.getElementById('souvenir-list');
coffeeBtn.addEventListener('click', () => {
    coffeeList.style.display = "block";
    souvenirList.style.display = "none";

    coffeeBtn.classList.remove('addborder2');
    souvenirBtn.classList.remove('addborder');
});

souvenirBtn.addEventListener('click', () => {
    souvenirList.style.display = "block";
    coffeeList.style.display = "none";

    coffeeBtn.classList.add('addborder2');
    souvenirBtn.classList.add('addborder');
});

