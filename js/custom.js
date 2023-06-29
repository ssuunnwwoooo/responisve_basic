const MainSlide = new Swiper('.main_slide', {
    loop: true,
});

const leftArrows = document.querySelector('#MainVisual .arrows .left');
leftArrows.addEventListener('click', function () {
    MainSlide.slidePrev();
});

const rightArrows = document.querySelector('#MainVisual .arrows .right');
rightArrows.addEventListener('click', function () {
    MainSlide.slideNext();
});

const proSlide = new Swiper('.pro_slide', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
        el: ".sbar",
        type: "progressbar",
    },
});