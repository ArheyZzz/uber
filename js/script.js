window.addEventListener('DOMContentLoaded', () => {
	const menu = document.querySelector('.menu')
	const menuItem = document.querySelectorAll('.menu-item')
	const links = document.querySelectorAll('.menu-item > a')
	const hamburger = document.querySelector('.hamburger')

	links.forEach(item => {
		item.addEventListener('click', function () {
			const link = document.getElementById(item.getAttribute('data-link'))
			link.scrollIntoView({ behavior: 'smooth' })
		})
	})

	hamburger.addEventListener('click', () => {
		hamburger.classList.toggle('hamburger-active')
		menu.classList.toggle('menu-active')
	})

	menuItem.forEach(item => {
		item.addEventListener('click', () => {
			hamburger.classList.toggle('hamburger-active')
			menu.classList.toggle('menu-active')
		})
	})
})
