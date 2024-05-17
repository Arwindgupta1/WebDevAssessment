function validateForm() {
	var name = document.getElementById("name").value.trim(); //trim() is used to delete white spaces
	var email = document.getElementById("email").value.trim();
	var message = document.getElementById("message").value.trim();

	var isValid = true;

	// Validating Name
	if (name === "") {
		isValid = false;
		document.getElementById("name").classList.add("error");
	} else {
		document.getElementById("name").classList.remove("error");
	}

	// Validating Email
	var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email)) {
		isValid = false;
		document.getElementById("email").classList.add("error");
	} else {
		document.getElementById("email").classList.remove("error");
	}

	// Validating Message
	if (message === "") {
		isValid = false;
		document.getElementById("message").classList.add("error");
	} else {
		document.getElementById("message").classList.remove("error");
	}

	if (!isValid) {
		document.getElementById("msg").innerText =
			"Please fill out all required fields correctly.";
	} else {
		document.getElementById("msg").innerText = "";
	}

	return isValid;
}
