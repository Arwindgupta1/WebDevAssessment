document.addEventListener("DOMContentLoaded", () => {
	const faqItems = document.querySelectorAll(".faq-item h3");
	faqItems.forEach((item) => {
		item.addEventListener("click", () => {
			item.parentElement.classList.toggle("active");
		});
	});
});
