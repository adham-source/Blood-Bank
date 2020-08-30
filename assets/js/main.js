// Date picker jquery ui
$(function() {
    $(".date").datepicker();
});

// Start owel carousel
$(document).ready(function(){
    $(".article .owl-carousel").owlCarousel({
            loop: true,
            margin: 20,
            // autoplay: true,
            rtl: true,
            responsiveClass: true,
            responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: true
            },
            1000: {
                items: 3,
                nav: true,
                loop: true
            }
        }
    });
});

//Show or hide drop down menu profile
const btnDropDown = document.querySelector('#drop-menu');
const menuDropDowm = document.querySelector('.profile-menu');

btnDropDown.addEventListener('click', () => {
    menuDropDowm.classList.toggle('active');
});

//Add and remove class active nav-bar by url location
const currentLocation = location.href;
const navBarLink = document.querySelectorAll('.nav-link');

navBarLink.forEach(navLink => {
    if(navLink.href === currentLocation) {
        navLink.parentElement.classList.add('active');
    } else {
        navLink.parentElement.classList.remove('active'); 
    }
});