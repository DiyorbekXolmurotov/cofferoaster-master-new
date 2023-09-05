const elHamburger =  document.querySelector('.nav__burger')
const elHeader  = document.querySelector('.header')
 
elHamburger.addEventListener('click', () => {
    elHeader.classList.toggle('header--active')
})