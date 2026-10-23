/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    navMenu.classList.remove('show-menu');
}

navLink.forEach(link => {
    link.addEventListener('click', linkAction);
});

/*=============== ADD BLUR HEADER ===============*/

const scrollHeader = () => {
    const header = document.getElementById('header');
    window.scrollY >= 10 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header');
}

window.addEventListener('scroll', scrollHeader);

/*=============== GSAP ANIMATION ===============*/


/*=============== SAKURA ANIMATION ===============*/

