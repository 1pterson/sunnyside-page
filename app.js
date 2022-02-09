const navBtn = document.getElementById('nav-btn');
const links = document.getElementById('mobile_links');

navBtn.addEventListener('click', function () {
  links.classList.toggle('opened');
});
// const mobileNav = document.querySelector('.mobile-nav');

// mobileNav.addEventListener('click', mobileMenuToogle);

// function mobileMenuToogle(){
//     document.querySelector('.main-menu').classList.toggle('active');
// }
