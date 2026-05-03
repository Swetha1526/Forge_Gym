// ─────────────────────────────────────
//   FORGE GYM — Main JavaScript
// ─────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {

  // ── Mobile Navigation ──
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close menu on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });


  // ── Contact Form ──
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', handleSubmit);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    btn.textContent = 'Sending...';
    btn.disabled = true;

    // Simulate API call — replace with real backend/emailjs/formspree
    setTimeout(() => {
      document.getElementById('formSuccess').style.display = 'block';
      e.target.reset();
      btn.textContent = 'Send Message →';
      btn.disabled = false;
    }, 1200);
  }


  // ── Scroll Reveal (IntersectionObserver) ──
  const revealItems = document.querySelectorAll(
    '.service-card, .trainer-card, .testi-card, .pricing-card, .detail-item'
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeUp 0.6s ease forwards';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealItems.forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
  });


  // ── Sticky Nav Shadow on Scroll ──
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
      nav.style.boxShadow = '0 4px 30px rgba(0,0,0,0.5)';
    } else {
      nav.style.boxShadow = 'none';
    }
  });

});
