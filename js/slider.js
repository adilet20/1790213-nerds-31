let slides = document.querySelectorAll('.slides');
let controls = document.querySelectorAll('.control');
let currentSlide = 1;

let manualNav = function(manual){
    slides.forEach((slides) => {
        slides.classList.remove('slide-current');

    controls.forEach((control) => {
        control.classList.remove('control-current');
        });
    });


    slides[manual].classList.add('slide-current');
    controls[manual].classList.add('control-current');
}

controls.forEach((control, i) => {
    control.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
    });
});