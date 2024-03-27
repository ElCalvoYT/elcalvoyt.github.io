
/* Toggle icon navbar */
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
};

/* Sticky navbar */
const header = document.querySelector("header");
header.classList.toggle('sticky', window.scrollY > 100);

/* remove toggle icon anf navbar when click navbar link (scroll) */
document.querySelectorAll("header nav a").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelectorAll("header nav a").forEach(link => {
            link.classList.remove("active");
        });
        link.classList.add("active");
        menuIcon.classList.remove("bx-x");
        navbar.classList.remove("active");
        document.title = `ElCalvoYT - ${link.innerText}`;
    });
});

/* Scroll Sections Active Link */

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id")

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector("header nav a[href*= " + id + "]").classList.add("active");
            });
        };
    })
}