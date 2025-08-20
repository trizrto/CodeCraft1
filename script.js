
// Menu toggle functionality
function toggleMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.getElementById('navMenu');

  menuToggle.classList.toggle('active');
  navMenu.classList.toggle('active');
}

// Close menu when clicking on a link
document.addEventListener('DOMContentLoaded', function() {
  const menuLinks = document.querySelectorAll('.nav-menu a');
  
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      const menuToggle = document.querySelector('.menu-toggle');
      const navMenu = document.getElementById('navMenu');

      menuToggle.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });

  // Smooth scroll for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Add active class to current page link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-menu a');
  
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const header = document.querySelector('.header');

  if (!header.contains(event.target)) {
    menuToggle.classList.remove('active');
    navMenu.classList.remove('active');
  }
});

// Add scroll effect to header
window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  if (window.scrollY > 100) {
    header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  } else {
    header.style.boxShadow = 'none';
  }
});

// Simple form submission handler (for company page)
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.querySelector('.contact-form form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simple form validation
      const inputs = this.querySelectorAll('input, textarea');
      let isValid = true;
      
      inputs.forEach(input => {
        if (!input.value.trim()) {
          isValid = false;
          input.style.borderColor = '#e74c3c';
        } else {
          input.style.borderColor = '#ddd';
        }
      });
      
      if (isValid) {
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        this.reset();
      } else {
        alert('Por favor, preencha todos os campos obrigatórios.');
      }
    });
  }
});
