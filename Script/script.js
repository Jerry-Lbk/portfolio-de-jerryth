// Navigation mobile
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

const navOverlay = document.getElementById('nav-overlay');

if (navToggle && navMenu) {
    function openMenu() {
        navMenu.classList.add('is-open');
        navMenu.setAttribute('aria-hidden', 'false');
        navMenu.querySelectorAll('a').forEach(link => link.tabIndex = 0);
        navToggle.setAttribute('aria-expanded', 'true');
        navToggle.setAttribute('aria-label', 'Fermer le menu');
        if (navOverlay) {
            navOverlay.classList.add('is-visible');
            navOverlay.setAttribute('aria-hidden', 'false');
        }
        document.body.classList.add('nav-open');
        document.body.style.overflow = 'hidden';
    }
    function closeMenu() {
        navMenu.classList.remove('is-open');
        navMenu.setAttribute('aria-hidden', 'true');
        navMenu.querySelectorAll('a').forEach(link => link.tabIndex = -1);
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Ouvrir le menu');
        if (navOverlay) {
            navOverlay.classList.remove('is-visible');
            navOverlay.setAttribute('aria-hidden', 'true');
        }
        document.body.classList.remove('nav-open');
        document.body.style.overflow = '';
    }
    function toggleMenu() {
        const isOpen = navMenu.classList.contains('is-open');
        if (isOpen) closeMenu();
        else openMenu();
    }
    navToggle.addEventListener('click', toggleMenu);
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 992) closeMenu();
        });
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMenu();
    });
    if (navOverlay) {
        navOverlay.addEventListener('click', closeMenu);
    }
    window.addEventListener('resize', () => {
        if (window.innerWidth > 992) closeMenu();
    });
}

// Bouton retour en haut
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
