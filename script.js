// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Simple form handler
function handleSubmit(e) {
  e.preventDefault();
  const msg = document.getElementById('form-msg');
  msg.textContent = 'Thank you! We will contact you shortly to confirm your appointment.';
  e.target.reset();
}
