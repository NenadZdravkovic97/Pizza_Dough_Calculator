const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.main-nav-list');

// Sticku nav
const header = document.querySelector('.header');
const nav = document.querySelector('.header-nav');

// Nav active
const navItems = document.querySelectorAll('.main-nav-link');
const sections = document.querySelectorAll('.active-section');

// Lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navItems.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
});

// Sticky nav
const navHeight = nav.offsetHeight;

const stickyNav = function (entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) nav.classList.add('sticky');
    else nav.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

window.addEventListener('scroll', () => {
    let current = null;
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 6) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('activeLink');
        if (item.href.split('#')[1] == current) {
            item.classList.add('activeLink');
        }
        if (current == null) {
            item.classList.remove('activeLink');
        }
    });
});

// Lazy loading images
const loadImg = function (entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    // Replace src with data-src
    entry.target.src = entry.target.dataset.src;

    entry.target.addEventListener('load', function () {
        entry.target.classList.remove('lazy-img');
    });

    observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
    root: null,
    threshold: 0,
    rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));
