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