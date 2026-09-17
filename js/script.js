/* =========================================
   PORTFOLIO CKF
   JavaScript
========================================= */


/* =========================================
   MODE CLAIR / MODE SOMBRE
========================================= */

const themeToggle = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
}


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const isDarkMode = document.body.classList.contains("dark-mode");

    if (isDarkMode) {

        themeToggle.textContent = "☀️";

        localStorage.setItem("theme", "dark");

    } else {

        themeToggle.textContent = "🌙";

        localStorage.setItem("theme", "light");

    }

});


/* =========================================
   BOUTON FR / EN
========================================= */

const languageToggle = document.getElementById("language-toggle");

let currentLanguage = localStorage.getItem("language") || "fr";


function translatePage() {

    const elements = document.querySelectorAll("[data-fr][data-en]");

    elements.forEach((element) => {

        element.textContent = element.dataset[currentLanguage];

    });


    document.documentElement.lang = currentLanguage;

}


translatePage();


languageToggle.addEventListener("click", () => {

    currentLanguage = currentLanguage === "fr" ? "en" : "fr";

    localStorage.setItem("language", currentLanguage);

    translatePage();

});


/* =========================================
   ANIMATION AU SCROLL
========================================= */

const animatedElements = document.querySelectorAll(
    ".section, .glance-item, .skill-card, .project-card, .experience-item, .certification-card"
);


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


animatedElements.forEach((element) => {

    element.classList.add("animate-on-scroll");

    observer.observe(element);

});


/* =========================================
   MENU MOBILE
========================================= */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");


menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("mobile-menu");

    const isOpen = navLinks.classList.contains("mobile-menu");

    menuToggle.textContent = isOpen ? "✕" : "☰";

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Fermer le menu" : "Ouvrir le menu"
    );

});


/* Fermer le menu après avoir cliqué sur un lien */

const navigationLinks = document.querySelectorAll(".nav-links a");


navigationLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("mobile-menu");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute(
            "aria-label",
            "Ouvrir le menu"
        );

    });

});