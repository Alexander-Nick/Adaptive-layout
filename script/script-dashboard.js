const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".header__menu");
const body = document.querySelector("body");
const scrollToContact = document.querySelector('#contact');
const footer = document.querySelector('.footer');

scrollToContact.addEventListener('click', function(event){
    event.preventDefault();
    footer.scrollIntoView({
        block:"start",
        inline:"nearest",
        behavior:"smooth",
    });
})



burger.addEventListener("click",function(event){
    burger.classList.toggle("active");
    menu.classList.toggle("active");
    body.classList.toggle("active")
})