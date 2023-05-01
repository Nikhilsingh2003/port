
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const section = document.querySelector(link.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
  });
});


const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileNav = document.querySelector('.mobile-nav');

mobileMenuBtn.addEventListener('click', () => {
  mobileNav.classList.toggle('show');
});

const currentYear = new Date().getFullYear();
const footerYear = document.querySelector('footer p');
footerYear.innerHTML += ` ${currentYear}`;
// hello mam i had edited my  file and i will create pull request from it 
