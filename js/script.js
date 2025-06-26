// Add smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const anchors = document.querySelectorAll('a[href^="#"]');
    
    anchors.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add active class to nav links based on scroll position
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Tutorial page navigation
    const tutorialSections = document.querySelectorAll('.tutorial-section');
    const tutorialNavLinks = document.querySelectorAll('.tutorial-nav a');
    
    if (tutorialSections.length > 0 && tutorialNavLinks.length > 0) {
        window.addEventListener('scroll', () => {
            let current = '';
            
            tutorialSections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (pageYOffset >= sectionTop - 150) {
                    current = section.getAttribute('id');
                }
            });
            
            tutorialNavLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }

    // Mobile navigation toggle
    const createMobileNav = () => {
        if (window.innerWidth <= 768 && !document.querySelector('.mobile-nav-toggle')) {
            const nav = document.querySelector('.main-nav .container');
            const navLinks = document.querySelector('.nav-links');
            
            const mobileNavToggle = document.createElement('button');
            mobileNavToggle.classList.add('mobile-nav-toggle');
            mobileNavToggle.innerHTML = '<i class="fas fa-bars"></i>';
            
            mobileNavToggle.addEventListener('click', function() {
                navLinks.classList.toggle('show');
                
                if (navLinks.classList.contains('show')) {
                    this.innerHTML = '<i class="fas fa-times"></i>';
                } else {
                    this.innerHTML = '<i class="fas fa-bars"></i>';
                }
            });
            
            nav.appendChild(mobileNavToggle);
        }
    };
    
    createMobileNav();
    
    window.addEventListener('resize', createMobileNav);
}); 