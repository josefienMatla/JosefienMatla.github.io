const swiper = new Swiper(".swiper--tippie", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 90,
    grabCursor: true,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

const swiper2 = new Swiper(".swiper--tripple", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 90,
    grabCursor: true,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

const swiper3 = new Swiper(".swiper--vr", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 90,
    grabCursor: true,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});