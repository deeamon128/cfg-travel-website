const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
})

// parallax effect starts

window.addEventListener('scroll', function () {
  const parallax = document.querySelector('.parallax');
  let scrollPosition = window.scrollY;

  parallax.style.transform = 'translateY(' + scrollPosition * .5 + 'px'
})

// parallax effect ends
