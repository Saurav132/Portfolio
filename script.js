// Example of adding simple animations on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight - 150) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
});

// Example of adding simple animations on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Check if the section is in the viewport
        if (sectionTop < windowHeight - 150) {
            section.classList.add('active'); // Add active class to trigger animation
        } else {
            section.classList.remove('active'); // Remove active class if not in view
        }
    });
});

// Optional: Add a smooth scroll effect for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const scrollElements = document.querySelectorAll(".scroll-reveal");

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const displayScrollElement = (element) => {
    element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElement(el);
        } else {
            hideScrollElement(el);
        }
    });
}

window.addEventListener("scroll", () => {
    handleScrollAnimation();
});

const typingHeader = document.getElementById('typing-header');
const typingSpeed = 3500; // Duration of typing effect in milliseconds
const totalText = typingHeader.innerText;

function resetTypingEffect() {
    typingHeader.style.width = '0'; // Reset width to 0
    setTimeout(() => {
        typingHeader.style.animation = 'none'; // Remove animation temporarily
        typingHeader.offsetHeight; // Trigger reflow
        typingHeader.style.animation = `typing ${typingSpeed}ms steps(${totalText.length}, end) forwards, blink 0.75s step-end infinite`;
    }, 100); // Allow a brief moment to reset
}

// Start the typing effect
resetTypingEffect();

// Repeat typing effect every few seconds
setInterval(resetTypingEffect, typingSpeed + 1000); // 1000ms for cursor blink effect duration




document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
