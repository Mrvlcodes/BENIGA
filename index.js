// Show and hide mobile menu
function toggleMenu(displayState) {
    const mobileMenu = document.querySelector('#mobileMenu');
    mobileMenu.style.display = displayState;
}

document.querySelector('#menu-btn').addEventListener('click', () => toggleMenu('flex'));
document.querySelector('.close-btn').addEventListener('click', () => toggleMenu('none'));

// Flip card on click
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('is-flipped');
    });
});

// Handle newsletter form submission
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("footer form");
    const email = document.querySelector("footer input[type='email']");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        if (!email.checkValidity()) {
            return;
        }

        // Send form data to server
        console.log("Email:", email.value);

        // Reset form
        email.value = "";
    });
});

// Fade-in sections on scroll
function fadeInSection() {
    const sections = document.querySelectorAll('#fade-in-section');

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight) {
            section.style.opacity = '1';
        }
    });
}

window.addEventListener('scroll', fadeInSection);
