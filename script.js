const transition = document.getElementById('page-transition');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Hamburger menu toggle
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Smooth page transitions
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = link.getAttribute('href');

    document.body.classList.add('fade-out');
    transition.classList.add('active');

    setTimeout(() => {
      window.location.hash = target;
      document.body.classList.remove('fade-out');
      transition.classList.remove('active');
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    }, 600);
  });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
});

// Active menu item highlight
window.addEventListener('scroll', () => {
  let current = '';
  document.querySelectorAll('section').forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 200) current = sec.getAttribute('id');
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === `#${current}`) a.classList.add('active');
  });
});