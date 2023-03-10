const burgerBtn = document.querySelector(".burger-btn");
const navItems = document.querySelector(".nav__items-mobile");
const footerYear = document.querySelector(".footer-year");
const desktopNavItems = document.querySelectorAll(".nav__item");
const scrollSections = document.querySelectorAll(".scroll-section");
const cookieBox = document.querySelector('.cookies__box')
const cookiesAcceptBtn = document.querySelector('.acceptbtn')
const cookiesDeclineBtn = document.querySelector('.declinebtn')

const handleCookieBox = () => {
    localStorage.setItem("cookie", "true");
    cookieBox.classList.add("hide");
};
const showCookie = () => {
    const cookieEaten = localStorage.getItem("cookie");

    if (cookieEaten) {
        cookieBox.classList.add("hide");
    }
};



footerYear.textContent = new Date().getFullYear();

const handleNav = () => {
	navItems.classList.toggle("active");
	document.body.classList.toggle('nav-open')
};
const closeNav = () => {
	navItems.classList.remove('active')
	document.body.classList.remove('nav-open')
}

const scrollSpy = () => {
	if (document.body.classList.contains("main")) {
		const sections = [];

		scrollSections.forEach(section => {
			if (window.scrollY <= section.offsetTop + section.offsetHeight -100) {
				sections.push(section);

				const activeSection = document.querySelector(
					`[href*="${sections[0].id}"]`
				);

				desktopNavItems.forEach(item =>
					item.classList.remove("nav__item--active")
				);

				activeSection.classList.add("nav__item--active");
			}
		});
	}
};

burgerBtn.addEventListener("click", handleNav);
window.addEventListener("scroll", scrollSpy);
navItems.addEventListener('click', closeNav)
cookiesAcceptBtn.addEventListener("click", handleCookieBox);
cookiesDeclineBtn.addEventListener("click", handleCookieBox);
showCookie()