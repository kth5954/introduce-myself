var toggle = document.querySelector("#navbar_toggle-btn");
var menu = document.querySelector(".navbar_menu");
var icons = document.querySelector(".navbar_icons");

toggle.addEventListener("click", (event)=>{
    event.preventDefault();
    menu.classList.toggle('active');
    icons.classList.toggle('active');

})


// image slider
// var slider = document.querySelector("#slider");
// var slides = slider.querySelector(".slides");
// var slide = slides.querySelectorAll(".slide");

// var currentSlide = 0;

// setInterval(function() {
//     var from = -(1024 * currentSlide);
//     var to = from - 1024;
//     slides.animate({
//         marginLeft: [from + "px", to + "px"]
//     }, {
//         duration: 500,
//         easing: "ease",
//         iterations: 1,
//         fill: "both"
//     });
//     currentSlide++;
//     if (currentSlide === (slide.length - 1)) {
//         currentSlide = 0;
//     }
// }, 3000);