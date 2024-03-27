const contactForm = document.getElementById('contactForm')
const inputs = contactForm.querySelectorAll(".important-input");
const submit_button = contactForm.querySelector('#submit-btn');
const info = contactForm.querySelector('.info');

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhoneNumber(phoneNumber) {
    const phoneRegex = /^\+\s*\d+$/;
    return phoneRegex.test(phoneNumber);
}

function validateInput(input) {

    if (!input.value) {
        return false
    } else if (/^\s*$/.test(input.value)) {
        info.innerText = "Input Must contain some characters";
        return false
    } else if (input.type === "email" && !validateEmail(input.value)) {
        info.innerText = "Email must contain an '@' followed by a domain"
        return false
    } else if (input.type === "tel" && !validatePhoneNumber(input.value)) {
        info.innerText = "Phone number must start with '+' and contain only digits"
        return false
    } else {
        info.innerText = ""
        return true
    }
}

inputs.forEach(input => {
    input.addEventListener("input", () => {
        if (!validateInput(input)) {
            input.style.border = ".1rem solid var(--error-color)";
            input.style.animation = "fieldError .5s ease-in-out";
        } else {
            input.style.border = "none";
            input.style.animation = "none";
        }
    })
});

document.addEventListener('DOMContentLoaded', function() {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        
        // Create and send POST request
        fetch('https://formspree.io/f/mgeglgby', {
            method: 'POST',
            headers: {
                'Accept': 'application/json'
            },
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            submit_button.value = 'Message Sent!';
            submit_button.style.backgroundColor = 'var(--success-color)';
            contactForm.reset();
            
            // wait 2 seconds and reset this conditions
            setTimeout(() => {
                submit_button.disabled = true;
                submit_button.value = 'Send Message';
            }, 2000)
        })
        .catch(error => {
            submit_button.value = 'Error Sending Message :(';
            submit_button.disabled = false;
            submit_button.style.backgroundColor = 'var(--error-color)';
            submit_button.style.animation = "fieldError .5s ease-in-out";
            submit_button.style.boxShadow = "0 0 .1rem var(--error-color)";

            // wait 2 seconds and reset this conditions
            setTimeout(() => {
                submit_button.value = 'Send Message';
                submit_button.style.backgroundColor = 'var(--main-color)';
                submit_button.style.animation = "none";
                submit_button.style.boxShadow = "0 0 .1rem var(--main-color)";
            }, 2000)
        });
    });
});