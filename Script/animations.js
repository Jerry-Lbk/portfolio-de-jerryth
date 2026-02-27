// Animations au scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Sélectionner les sections ET les éléments avec fade-in-section
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    if (!section.classList.contains('fade-in-section')) {
        section.classList.add('fade-in-section');
    }
    observer.observe(section);
});
document.querySelectorAll('.fade-in-section').forEach(el => {
    observer.observe(el);
});

// Animation des barres de compétences au scroll
const skillBarsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const fill = entry.target;
            const level = fill.getAttribute('data-level') || 0;
            fill.style.width = level + '%';
            skillBarsObserver.unobserve(fill);
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.skill-fill').forEach(fill => {
    skillBarsObserver.observe(fill);
});