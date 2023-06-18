
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
const openModal = document.querySelector('.modal');
const modal = document.querySelector('#modal');
const closeModal = document.querySelector('.close-modal');
var galleryImg = $('.img-box');
var largeImg = $('#large-img');
var btnNav = $('.navbar-toggle');
var listMenu = $('#navMenu');
var nav = $('nav');
// Remove class Collapsed from nav button
btnNav.on('click', function () {
    listMenu.slideToggle(100);
    btnNav.toggleClass('collapsed');
    nav.toggleClass('blue-nav', 300, "swing");
})
// open Modal
openModal.addEventListener('click', () => {modal.style.display = 'flex'})
// close Modal
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  closeModal.addEventListener('click', () => {modal.style.display = 'none'});
// gallery slide show
galleryImg.each(function() {
    $(this).on('click', function () {
        var swapImg = largeImg.attr('src');
        largeImg.attr('src', $(this).find('img').attr('src'));
        $(this).find('img').attr('src', swapImg);
    });
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

//Counter function
var  num = 0;
$(".circle_percent").each(function() {
    var circleArr = ['Years of Expirience', 'Super Suites', 'Family Rooms', 'Hotel Personal'];
    var $this = $(this),
		$dataV = $this.data("percent"),
		$dataDeg = $dataV * 3.6,
		$round = $this.find(".round_per");
        $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");	
        $this.append('<div class="circle_inbox"><span class="percent_text"></span></div>');
        $this.append(`<p class="percent_text_small">${circleArr[num]}</p>`);
        num++;
        $this.prop('Counter', 0).animate({Counter: $dataV},
	{
		duration: 2000, 
		easing: 'swing', 
		step: function (now) {
            $this.find(".percent_text").html(Math.ceil(now)+`%`);
        }
    });
	if($dataV >= 51){
		$round.css("transform", "rotate(" + 360 + "deg)");
		setTimeout(function(){
			$this.addClass("percent_more");
		},1000);
		setTimeout(function(){
			$round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
		},1000);
	} 
});
// call Owl Carousel

$(document).ready(function(){
    $(".owl-carousel").each(function () {
        $(this).owlCarousel({
            items: 3, //10 items above 1000px browser width
            itemsDesktop: [1440, 3], //5 items between 1000px and 901px
            itemsDesktopSmall: [768, 1], // 3 items betweem 900px and 601px
            itemsTablet: [576, 1], //2 items between 600 and 0;
            //  itemsMobile : false , // itemsMobile disabled - inherit from itemsTablet option
            dots: false, 
            stagePadding: Number, //stagePadding: 50,
            loop: false, 
            margin: 30, 
            rtl: true, 
            pagination: false,
            nav: true,
            navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
            autoplay:true,
            autoplayTimeout:1000,
            autoplayHoverPause:true,
              responsive:{
                0:{
                    items:1
                },
                576:{
                    items:1
                },
                768:{
                    items:1
                },
                1000:{
                    items:2
                },
                1440:{
                    items:3
                }
            }
        });
    });
});



  
