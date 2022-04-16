// Меню-бургер
window.addEventListener('DOMContentLoaded', () => {
	const menu = document.querySelector('.header__nav'),
		menuItem = document.querySelectorAll('.header__nav-link'),
		hamburger = document.querySelector('.hamburger');

	hamburger.addEventListener('click', () => {
		hamburger.classList.toggle('hamburger_active');
		menu.classList.toggle('header__nav_active');
	});

	menuItem.forEach(item => {
		item.addEventListener('click', () => {
			hamburger.classList.toggle('hamburger_active');
			menu.classList.toggle('header__nav_active');
		})
	})
});

// Спойлер для Фильтра предложений

$(document).ready(function () {
	$('.offer-filter').click(function (event) {
		$(this).toggleClass('active').next().slideToggle(300);
	});
});