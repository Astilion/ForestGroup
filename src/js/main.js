const burgerBtn = document.querySelector(".burger-btn");
const navItems = document.querySelector(".nav__items-mobile");
const footerYear = document.querySelector(".footer-year");
const desktopNavItems = document.querySelectorAll('.nav__item')
const scrollSection = document.querySelectorAll('.scroll-section')

footerYear.textContent = new Date().getFullYear();

const handleNav = () => {
	navItems.classList.toggle("active");
};


const scrollSpy = (section) => {
	
}
burgerBtn.addEventListener("click", handleNav);
