// ================= MOBILE MENU =================
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function (e) {
        e.stopPropagation();
        navLinks.classList.toggle("active");
    });

    // CLOSE WHEN CLICK LINK
    document.querySelectorAll("#nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });

    // CLOSE WHEN CLICK OUTSIDE
    document.addEventListener("click", (e) => {
        if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
            navLinks.classList.remove("active");
        }
    });
}


// ================= STICKY NAVBAR + SCROLL BUTTON =================
const scrollBtn = document.getElementById("scrollTopBtn");
const header = document.querySelector("header");

window.addEventListener("scroll", function () {

    if (header) {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }

    if (scrollBtn) {
        if (window.scrollY > 300) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }
    }

});


// ================= SCROLL TO TOP =================
if (scrollBtn) {
    scrollBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}


// ================= HERO SLIDER =================
document.addEventListener("DOMContentLoaded", function () {

    let slides = document.querySelectorAll(".hero-slider .slide");

    if (slides.length > 0) {

        let index = 0;

        setInterval(function () {

            slides[index].classList.remove("active");

            index = (index + 1) % slides.length;

            slides[index].classList.add("active");

        }, 9000);
    }

});


// ================= IMAGE SLIDER =================
document.addEventListener("DOMContentLoaded", function () {

    let imgs = document.querySelectorAll(".image-slider .slider-img");

    if (imgs.length > 0) {

        let imgIndex = 0;

        setInterval(function () {

            imgs[imgIndex].classList.remove("active");

            imgIndex = (imgIndex + 1) % imgs.length;

            imgs[imgIndex].classList.add("active");

        }, 3000);
    }

});
