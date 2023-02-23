const burgerBtn = document.querySelector('.burger-btn')
const navItems = document.querySelector('.nav__items-mobile')

const handleNav = () => {
    navItems.classList.toggle('active')

}

burgerBtn.addEventListener('click', handleNav)