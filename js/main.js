// show menu
const navMenu = document.getElementById('nav-menu'),
	navToggle = document.getElementById('nav__toggle'),
	navClose = document.getElementById('nav__close')

// menu show
if (navToggle) {
	navToggle.addEventListener('click', () => {
		navMenu.classList.add('show-menu')
	})
}

//menu hidden

if (navClose) {
	navClose.addEventListener('click', () => {
		navMenu.classList.remove('show-menu')
	})
}