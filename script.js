// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Sticky navabar
let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

// Remove toogle icon and navbar when clicked navabr link (scroll)
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');



// Scroll Reveal start here
ScrollReveal({
    reset: true,
    distance: '50px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .services .contact form, .portfoilo-container', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


 //typed js start here
const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'Blogger', 'Youtuber'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});