const btnMenu = document.getElementById('btn-nav');

function toggleMenu() {
    const nav = document.getElementById('nav_head');
    nav.classList.toggle('active')
}



btnMenu.addEventListener(click, toggleMenu());

