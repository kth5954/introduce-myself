var toggle = document.querySelector("#navbar_toggle-btn");
var menu = document.querySelector(".navbar_menu");
var icons = document.querySelector(".navbar_icons");

toggle.addEventListener("click", (event)=>{
    event.preventDefault();
    menu.classList.toggle('active');
    icons.classList.toggle('active');

})



//Typeit Text animation
document.addEventListener("DOMContentLoaded", ()=>{
    new TypeIt(".welcome")
    .pause(500)
    .delete(100, {delay: 50})
    .type("천천히 둘러보세요!! 😎:) <br> Take it slow!! 😎:)")

    .go();
});