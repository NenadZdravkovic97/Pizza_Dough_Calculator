// Navbar toggle
let toggleBtn = document.querySelector('.toggle');
let items = document.querySelectorAll('.item');
let spanNav = document.querySelector('#btnNav')

// navigation links - add active classes DOM
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".links");

// Navbar toggle
toggleBtn.addEventListener('click', () => {
    items.forEach(item => {
        if (item.classList.contains('active')) {
            item.classList.remove('active');
            spanNav.classList.add('bars');
            spanNav.classList.remove('activeMenu');
        } else {
            item.classList.add('active');
            spanNav.classList.remove('bars');
            spanNav.classList.add('activeMenu');
        }
    });
});


// Add Active Classes DOM

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
            console.log(current);
        }
    });


    navItems.forEach(item => {
        item.classList.remove('activeLink');
        if (item.href.split('#')[1] == current) {
            item.classList.add('activeLink');
        }
    });
});