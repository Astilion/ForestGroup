const burgerBtn = document.querySelector(".burger-btn");
const navItems = document.querySelector(".nav__items-mobile");
const footerYear = document.querySelector(".footer-year");

footerYear.textContent = new Date().getFullYear();

const handleNav = () => {
	navItems.classList.toggle("active");
};

burgerBtn.addEventListener("click", handleNav);
