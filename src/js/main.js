const burgerBtn = document.querySelector('.burger-btn')
const navItems = document.querySelector('.nav__items')

const handleNav = () => {
    navItems.classList.toggle('active')

}

burgerBtn.addEventListener('click', handleNav)