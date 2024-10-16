const menu = document.querySelector("#menu");
const close = document.querySelector(".dropdown-menu i");
const logo = document.querySelector("nav h1");

const tl = gsap.timeline();


tl.to(".dropdown-menu",{
    right: 0,
    duration: 0.5
})

tl.from(".dropdown-menu h4",{
    x: 150,
    duration: 0.3,
    stagger: 0.2,
    opacity: 0
})
tl.from(".dropdown-menu i",{
    opacity: 0,
    ease: 'bounce',
    duration: 0.3
} )

tl.pause();

menu.addEventListener("click", function(){
    tl.play();
})

close.addEventListener("click", function(){
    tl.reverse();
})

gsap.from(logo, {
    y: 60,
    opacity: 0,
    duration: 2,
    ease: 'bounce.in'
})