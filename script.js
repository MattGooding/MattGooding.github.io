const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');
const upArrow = document.querySelector(".fa-angle-up");

// close menu when you click on a menu item 
openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);
menu_items.forEach(item => {
    item.addEventListener('click', function () {
        close();
    })
})

function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close() {
    mainMenu.style.top = '-100%';
}

// When the user scrolls down 30px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        document.getElementsByTagName('header')[0].style.padding = "15px 0px";

    } else {
        document.getElementsByTagName('header')[0].style.padding = "25px 0px";
    }
}

// Slide up animation on visible
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".container");

    function checkVisibility() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight * 0.9) {
                section.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    window.addEventListener("resize", checkVisibility);

    // Check visibility on page load
    checkVisibility();
});