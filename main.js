const swiper = new Swiper('.slider-wrapper', {
loop: true,
grabCursor:true,
spaceBtween:25,
// If we need pagination
pagination: {
    el: '.swiper-pagination',
    clickablr : true,
    dynamicBullets : true,

},
// Navigation arrows
navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
},
breakpoints:{
    0:{
        slidersPerView : 1
    },
    768:{
        slidersPerView : 2
    },
    1024:{
        slidersPerView : 3
    }
}
});