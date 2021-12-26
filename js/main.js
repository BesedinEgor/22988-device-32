$(function () {
    $('.slider__items').slick({
        arrows: true,
        dots: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000
    })
});

let upButton = document.querySelector('.up-button');
window.onscroll = function () {
    if (window.pageYOffset > 400) {
        upButton.classList.add('shown');
    } else {
        upButton.classList.remove('shown');
    }
}
upButton.onclick = function () {
    window.scrollTo(0, 0);
    window.scrollBy({
        top: 1,
        behavior: 'smooth'
    });
}
