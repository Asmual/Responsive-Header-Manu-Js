// const navbarToggle = document.querySelector('.navbar_toggle');
// const navbarManu = document.querySelector('.navbar_manu');
// navbarToggle.addEventListener('click', () => {
//   navbarToggle.classList.toggle('active');
//   navbarManu.classList.toggle('active');
 
//   })
// const navbarToggle = document.querySelector('.navbar_toggle');
// const navbarMenu = document.querySelector('.navbar_manu');

// navbarToggle.addEventListener('click', () => {
//   navbarToggle.classList.toggle('active');
//   navbarMenu.classList.toggle('active');
// });

document.addEventListener('DOMContentLoaded', () => {
  const navbarToggle = document.querySelector('.navbar_toggle');
  const navbarMenu = document.querySelector('.navbar_manu');

  navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
  });
});
