document.addEventListener('DOMContentLoaded', function () {
    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
    }

    // Hero background image rotation
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        const heroImages = [
            "images/bg4.webp",
            "images/mb1.jpg",
            "images/bg5.webp"
        ];
        let currentHero = 0;
        setInterval(() => {
            currentHero = (currentHero + 1) % heroImages.length;
            heroSection.style.backgroundImage = `url('${heroImages[currentHero]}')`;
        }, 3000);
    }

    // Contact form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async function (e) {
            e.preventDefault();

            const form = e.target;
            const data = {
                name: form.name.value,
                phone: form.phone.value,
                email: form.email.value,
                location: form.location.value,
                services: Array.from(form.querySelectorAll('input[name="services"]:checked')).map(cb => cb.value).join(', '),
                message: form.message.value,
            };

            try {
                const response = await fetch('https://winner-construction-backend.onrender.com/send', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data),
                });
                const text = await response.text();
                alert(text);
                form.reset();
            } catch (error) {
                alert('Error sending message: ' + error);
            }
        });
    }
});
