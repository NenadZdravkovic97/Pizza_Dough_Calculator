const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.main-nav-list');

// Sticku nav
const header = document.querySelector('.header');
const nav = document.querySelector('.header-nav');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Sticky nav
const navHeight = nav.offsetHeight;
console.log(navHeight);

const stickyNav = function (entries) {
    const [entry] = entries;
    console.log(entry);
    if (!entry.isIntersecting) nav.classList.add('sticky');
    else nav.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);
