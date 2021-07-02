// Navbar toggle
let toggleBtn = document.querySelector('.toggle');
let items = document.querySelectorAll('.item');



// Navbar toggle
toggleBtn.addEventListener('click', () => {
    items.forEach(item => {
        if (item.classList.contains('active')) {
            item.classList.remove('active');
        } else {
            item.classList.add('active');
        }
    });
});