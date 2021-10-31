/*===== MENU ANIMATIONS =====*/

const menuToggle = document.querySelector('.toggle');
const ul = document.querySelector('.nav__list');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    ul.classList.toggle('active');
})

// Active Menu

const sec = document.querySelectorAll("section");
const li = document.querySelectorAll(".nav__item");

function activeMenu() {
    let len = sec.length;
    while (--len && window.scrollY + 97 < sec[len].offsetTop) {}
    li.forEach(ltx => ltx.classList.remove("active"));
    li[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll", activeMenu);

/*===== CURSOR ANIMATIONS =====*/

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})

/*===== GSAP ANIMATIONS =====*/

// NAV
gsap.from('.path', {
    opacity: 0,
    duration: 1,
    delay: 0.4,
    x: -30
})
gsap.from('.toggle', {
    opacity: 0,
    duration: 1,
    delay: 1.1,
    y: 30,
})
gsap.from('.line, .polygon', {
    opacity: 0,
    duration: 1,
    delay: 1.1,
    x: -30
})

// HOME

gsap.from('.container .content', {
    opacity: 0,
    duration: 1,
    delay: 0.8,
    x: -30
})
gsap.from('.container .content p', {
    opacity: 0,
    duration: 1,
    delay: 1.1,
    x: -30
})
gsap.from('.container .button', {
    opacity: 0,
    duration: 1,
    delay: 1.4,
    x: -30
})