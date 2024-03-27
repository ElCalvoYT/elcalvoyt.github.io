/* Typed js */

const multipleTexts = ["Full Stack Developer", "3D Artist", "Video Editor", "Visual Effects Artist", "YouTuber", "Streamer"]

const typedHome = new Typed(".multiple-text-about", {
    strings: multipleTexts,
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const about1Img = document.getElementById("about1-img");
const sensitivity = 0.04;

window.addEventListener("mousemove", (e) => {
    about1Img.style.animation = "none";
    const mouseX = (e.clientX - window.innerWidth / 2) * sensitivity + "px";
    const mouseY = (e.clientY - window.innerHeight / 2) * sensitivity + "px";
    about1Img.style.setProperty("--mouseX", mouseX);
    about1Img.style.setProperty("--mouseY", mouseY);
    about1Img.style.animation = "floatAndMove 4s ease-in-out infinite";
});


