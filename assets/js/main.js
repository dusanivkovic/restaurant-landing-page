
const showCalendarArrival = document.getElementsByClassName('search-date')[0];
const showCalendarDeparture = document.getElementsByClassName('search-date')[1];
const calendarArrival = document.querySelector('#arrival-date');
const calendarDeparture  = document.querySelector('#departure-date');
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];
const adults = document.querySelector('#numAdults');
const children = document.querySelector('#numChildren');
const decreaseAdults = document.querySelector('.minusAdults');
const decreaseChildren = document.querySelector('.minusChildren');
const increaseAdults = document.querySelector('.addAdults');
const increaseChildren = document.querySelector('.addChildren');
const menuList = document.querySelector('#navMenu');
const navBar = document.querySelector('.navbar-toggle');
// Remove class Collapsed from nav button
navBar.addEventListener('click', () => {
    navBar.classList.toggle('collapsed');
    console.log(menuList.className)
    if (menuList.className == 'toggle') {
        menuList.style.display = 'none';
        menuList.classList.remove('toggle');
    }else {
        menuList.style.display = 'block';
        menuList.classList.add('toggle');
    }
    // menuList.style.display = 'block';
})
//show calendar on departure and arrival
showCalendarArrival.addEventListener('click', (e) => {
    calendarArrival.showPicker();
});
showCalendarDeparture.addEventListener('click', (e) => {
    calendarDeparture.showPicker();
})
// get value from calendar
calendarArrival.addEventListener('change', () => getDate(calendarArrival, '.data-arrival', '.number-arrival'));
calendarDeparture.addEventListener('change', () => getDate(calendarDeparture, '.data-departure', '.number-departure'));

function getDate (cal, data, num) {
    let date = new Date(cal.value);
    let day = weekday[date.getDay()];
    let month = months[date.getMonth()];
    let year = date.getFullYear();
    let dateBox = document.querySelector(data);
    dateBox.textContent = `${month},  ${year}`;
    dateBox.innerHTML += `<span class="search-day">${day}</span>`;
    let dataDate = document.querySelector(num);
    dataDate.textContent = date.getDate();
}
 //Increase or decrease adults or children
decreaseAdults.addEventListener('click', () => decreasePeople(adults));
increaseAdults.addEventListener('click', () => increasePeople(adults));
decreaseChildren.addEventListener('click', () => decreasePeople(children));
increaseChildren.addEventListener('click', () => increasePeople(children));
function decreasePeople (role) {
    let i = parseInt(role.textContent);
    i--;
    if (i > -1) role.textContent = i; 
}
function increasePeople (role) {
    let i = parseInt(role.textContent);
    i++;
    if (i <= 10) {
        role.textContent = i
    }else {
        alert('the maximum number of guests is 10');
    }; 
}
