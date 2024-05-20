function validateForm(event) {
	event.preventDefault();

	var nameElement = document.getElementById("name");
	var emailElement = document.getElementById("email");
	var messageElement = document.getElementById("message");

	var name = nameElement.value.trim();
	var email = emailElement.value.trim();
	var message = messageElement.value.trim();

	var isValid = true;

	if (name === "") {
		isValid = false;
		nameElement.classList.add("error");
	} else {
		nameElement.classList.remove("error");
	}

	var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email)) {
		isValid = false;
		emailElement.classList.add("error");
	} else {
		emailElement.classList.remove("error");
	}

	if (message === "") {
		isValid = false;
		messageElement.classList.add("error");
	} else {
		messageElement.classList.remove("error");
	}

	if (isValid) {
		var xhr = new XMLHttpRequest();
		xhr.open("POST", "/submit-form", true);
		xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4 && xhr.status === 200) {
				document.getElementById("msg").innerText = xhr.responseText;
				setTimeout(function () {
					document.getElementById("contactForm").reset();
					document.getElementById("msg").innerText = "";
				}, 3000);
			} else if (xhr.readyState === 4) {
				document.getElementById("msg").innerText = "Failed to save data.";
			}
		};
		xhr.send(JSON.stringify({ name: name, email: email, message: message }));
	} else {
		document.getElementById("msg").innerText =
			"Please fill out all required fields correctly.";
	}

	return false;
}

document.querySelector("form").onsubmit = validateForm;
