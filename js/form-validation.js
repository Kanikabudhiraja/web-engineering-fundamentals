// Contact Form Validation

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const subject = document.getElementById("subject");
        const message = document.getElementById("message");

        // Remove extra spaces
        const nameValue = name.value.trim();
        const emailValue = email.value.trim();
        const subjectValue = subject.value.trim();
        const messageValue = message.value.trim();

        // Email Pattern
        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validation

        if (
            nameValue === "" ||
            emailValue === "" ||
            subjectValue === "" ||
            messageValue === ""
        ) {

            alert("Please fill in all required fields.");
            event.preventDefault();
            return;
        }

        if (!emailPattern.test(emailValue)) {

            alert("Please enter a valid email address.");
            event.preventDefault();
            return;
        }

        if (messageValue.length < 10) {

            alert(
                "Message should contain at least 10 characters."
            );

            event.preventDefault();
            return;
        }

        alert("Message submitted successfully!");

    });

}