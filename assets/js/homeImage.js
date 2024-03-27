const homeImg = document.getElementById("home-img");
const sensitivity = 0.04;

window.addEventListener("mousemove", (e) => {
    homeImg.style.animation = "none";
    const mouseX = (e.clientX - window.innerWidth / 2) * sensitivity + "px";
    const mouseY = (e.clientY - window.innerHeight / 2) * sensitivity + "px";
    homeImg.style.setProperty("--mouseX", mouseX);
    homeImg.style.setProperty("--mouseY", mouseY);
    homeImg.style.animation = "floatAndMove 4s ease-in-out infinite";
});