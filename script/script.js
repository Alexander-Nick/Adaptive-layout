const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".header__links");
const body = document.querySelector("body");
const scrollToContact = document.querySelector('#contact');
const footer = document.querySelector('.footer');

burger.addEventListener("click",function(event){
    burger.classList.toggle("active");
    menu.classList.toggle("active");
    body.classList.toggle("active")
})

scrollToContact.addEventListener('click', function(event){
    event.preventDefault();
    footer.scrollIntoView({
        block:"start",
        inline:"nearest",
        behavior:"smooth",
    });
})