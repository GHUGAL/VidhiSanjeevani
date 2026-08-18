document.addEventListener("DOMContentLoaded", () => {

    const b = document.querySelector(".menu-toggle");
    const n = document.querySelector(".nav");

    if (b && n) {
        b.onclick = () => n.classList.toggle("open");
    }

});