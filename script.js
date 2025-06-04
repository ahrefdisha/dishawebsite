// Smooth scrolling
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Active nav link on scroll
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollY = window.scrollY;
  
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
  
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        document.querySelectorAll('nav a').forEach(link => {
          link.classList.remove('text-pink-800', 'underline');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('text-pink-800', 'underline');
          }
        });
      }
    });
  });
  