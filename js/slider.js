let slides = document.querySelectorAll('.slider-slides');
let controls = document.querySelectorAll('.control');
let currentSlide = 1;

let manualNav = function(manual){
    slides.forEach((slider-slides) => {
        slider-slides.classList.remove('slider-slides');

    controls.forEach((control) => {
        control.classList.remove('control');
        });
    });


    slides[manual].classList.add('slide-current');
    controls[manual].classList.add('control-current');
}

controls.forEach((control, i) => {
    control.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
    })
});