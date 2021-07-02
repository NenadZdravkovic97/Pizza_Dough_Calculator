// Navbar toggle
let toggleBtn = document.querySelector('.toggle');
let items = document.querySelectorAll('.item');

// navigation links
let links = document.querySelectorAll('.links');


// Add activeLink class to clicked nav link
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
        let current = document.querySelectorAll(".activeLink");
        current[0].className = current[0].className.replace(" activeLink", "");
        this.className += " activeLink";
    });
}



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