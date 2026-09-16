// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Sticky header shadow on scroll
const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  header.style.boxShadow = window.scrollY > 8 ? '0 4px 20px rgba(24,34,56,0.06)' : 'none';
});

// Scroll reveal animation
const revealEls = document.querySelectorAll(
  '.about-grid, .skill-card, .project-card, .timeline-item, .education-card, .contact-grid'
);
revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => observer.observe(el));

// Contact form -> opens the user's email client with prefilled content
// (This is a static site with no backend, so this is the most reliable
// no-server way to let visitors actually reach you.)
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(contactForm);
  const name = data.get('name') || '';
  const email = data.get('email') || '';
  const subject = data.get('subject') || 'Portfolio contact';
  const message = data.get('message') || '';

  const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
  const mailto = `mailto:sreemalathik@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.location.href = mailto;
  formNote.textContent = "Opening your email app to send this message…";
});
