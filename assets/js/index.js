/* Scroll Reveal */

ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: "top" });
ScrollReveal().reveal('.home-img, .services-container, .project-box, .contact form ', { origin: "bottom" });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: "left" });
ScrollReveal().reveal('.home-content  p, .about-content', { origin: "right" });

/* Typed js */

const multipleTexts = ["Full Stack Developer", "3D Artist", "Video Editor", "Visual Effects Artist", "YouTuber", "Streamer"]

const typedHome = new Typed(".multiple-text-home", {
    strings: multipleTexts,
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const typedAbout = new Typed(".multiple-text-about", {
    strings: multipleTexts,
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});