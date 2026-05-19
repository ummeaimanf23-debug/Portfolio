// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active nav link indicator
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

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
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe project cards and sections
document.querySelectorAll('.project-card, .skill-category, .stat').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinksContainer = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinksContainer.style.display = navLinksContainer.style.display === 'flex' ? 'none' : 'flex';
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinksContainer.style.display = 'none';
        });
    });
}

// Add typing effect to hero title
const heroTitle = document.querySelector('.hero-title');
const titleText = heroTitle.textContent;
let index = 0;

function typeTitle() {
    if (index < titleText.length) {
        heroTitle.textContent = titleText.substring(0, index + 1);
        index++;
        setTimeout(typeTitle, 50);
    }
}

// Reset and start typing animation when page loads
heroTitle.textContent = '';
window.addEventListener('load', () => {
    typeTitle();
});

// Hover effect on project cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.boxShadow = 'var(--shadow)';
    });
    card.addEventListener('mouseleave', function() {
        this.style.boxShadow = '';
    });
});

console.log('Portfolio website loaded successfully!');