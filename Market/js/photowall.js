var swiper1 = new Swiper("#ture", {
    speed: 15000,
    autoplay: {
        delay: 0,
    },
    loop: true,
    loopAdditionalSlides: 6,
    slidesPerView: 6,
    preloadImages: true,
    updateOnImagesReady: true,
});
var swiper2 = new Swiper("#reverse", {
    speed: 15000,
    roundLengths: false,
    autoplay: {
        delay: 0,
        reverseDirection: true,

    },
    loop: true,
    loopAdditionalSlides: 6,
    slidesPerView: 6,
    preloadImages: true,
    updateOnImagesReady: true,
});
var swiper3 = new Swiper("#ture2", {
    speed: 15000,
    autoplay: {
        delay: 0,
    },
    loop: true,
    loopAdditionalSlides: 6,
    slidesPerView: 6,
    preloadImages: true,
    updateOnImagesReady: true,
});


swiper1.el.onmouseenter = function () {

    var swiper1_translate = swiper1.getTranslate();

    swiper1.setTranslate(swiper1_translate);

}

swiper1.el.onmouseleave = function () {

    var Now_translate1 = swiper1.getTranslate();

    Now_translate1 = Now_translate1 - 300;

    swiper1.setTransition(15000);

    swiper1.setTranslate(Now_translate1);

}

swiper2.el.onmouseenter = function () {

    var swiper2_translate = swiper2.getTranslate();

    swiper2.setTranslate(swiper2_translate);

}

swiper2.el.onmouseleave = function () {

    var Now_translate2 = swiper2.getTranslate();

    Now_translate2 = Now_translate2 + 300;

    swiper2.setTransition(15000);

    swiper2.setTranslate(Now_translate2);
}

swiper3.el.onmouseenter = function () {

    var swiper3_translate = swiper3.getTranslate();

    swiper3.setTranslate(swiper3_translate);

}

swiper3.el.onmouseleave = function () {

    var Now_translate3 = swiper3.getTranslate();

    Now_translate3 = Now_translate3 - 300;

    swiper3.setTransition(15000);

    swiper3.setTranslate(Now_translate3)

}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// ----- name -----

const mumbers = document.querySelectorAll(".member");
let lastClickMumber = document.querySelector(".member");

function toggleOpen() {
    if (this !== lastClickMumber) {
        lastClickMumber.classList.remove('open');
        lastClickMumber = this;
    }
    this.classList.toggle("open");
}

mumbers.forEach(mumber => mumber.addEventListener("click", toggleOpen));

