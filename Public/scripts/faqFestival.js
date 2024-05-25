document.addEventListener("DOMContentLoaded", () => {
	const faqItems = document.querySelectorAll(".faq-item h3");
	faqItems.forEach((item) => {
		item.addEventListener("click", () => {
			item.parentElement.classList.toggle("active");
		});
	});

	const scheduleItems = document.querySelectorAll(".schedule-item h3");
	scheduleItems.forEach((item) => {
		item.addEventListener("click", () => {
			item.parentElement.classList.toggle("active");
		});
	});
});
