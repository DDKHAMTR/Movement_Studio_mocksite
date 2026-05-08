document.addEventListener('DOMContentLoaded', () => {
  
const nav = document.getElementById('mainNav');
let lastScrollY = window.scrollY;
let scrollTimeout;

// Scroll Animation for Navbar
window.addEventListener('scroll', () => {
  
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    nav.classList.add('nav-hidden');
  } 
  else {
    nav.classList.remove('nav-hidden');
  }
  if (currentScrollY > 50) {
    nav.classList.add('nav-scrolled');
  } else {
    nav.classList.remove('nav-scrolled');
  }

  lastScrollY = currentScrollY;
});

  // Fade in animation(P2 and 3)
  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);
  document.querySelectorAll('section').forEach(section => {
    section.classList.add('reveal-on-scroll');
    observer.observe(section);
  });

  // 3. SMOOTH SCROLLING FOR BUTTONS
  document.querySelectorAll('button, a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        document.querySelector(targetId).scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const openBtn = document.getElementById('openSidebar');
    const closeBtn = document.getElementById('closeSidebar');

// Function to toggle sidebar
    const toggleSidebar = () => {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
  
  // Prevent body scroll when sidebar is open
    if (sidebar.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
    };

// Event Listeners
    openBtn.addEventListener('click', toggleSidebar);
    closeBtn.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', toggleSidebar);

// Close sidebar when clicking a link
    const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
    sidebarLinks.forEach(link => {
      link.addEventListener('click', toggleSidebar);
    });

});