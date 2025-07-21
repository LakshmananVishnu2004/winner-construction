const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');


hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});


document.querySelector('.contact-form').addEventListener('submit', async function (e) {
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
        const response = await fetch('http://localhost:5000/send', {
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
