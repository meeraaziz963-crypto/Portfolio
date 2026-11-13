
/* =========================================
   INNOVISTA PERSONAL PORTFOLIO
   JavaScript Functionality
========================================= */


/* ================= MOBILE NAVIGATION ================= */

const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".navbar a");

if (menuToggle && navbar) {

    // Open and close mobile menu
    menuToggle.addEventListener("click", function () {

        navbar.classList.toggle("active");

        const isOpen = navbar.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

        // Change menu icon
        menuToggle.innerHTML = isOpen
            ? '<i class="fas fa-times"></i>'
            : '<i class="fas fa-bars"></i>';

    });


    // Close menu after clicking a navigation link
    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navbar.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';

        });

    });


    // Close menu when clicking outside
    document.addEventListener("click", function (event) {

        const clickedInsideMenu = navbar.contains(event.target);
        const clickedToggle = menuToggle.contains(event.target);

        if (!clickedInsideMenu && !clickedToggle) {

            navbar.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';

        }

    });

}


/* ================= ACTIVE NAVIGATION LINK ================= */

const sections = document.querySelectorAll("section[id]");

function updateActiveLink() {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

}

window.addEventListener("scroll", updateActiveLink);

updateActiveLink();


/* ================= BACK TO TOP BUTTON ================= */

const backToTop = document.querySelector(".back-to-top");

if (backToTop) {

    // Show or hide button based on scroll position
    window.addEventListener("scroll", function () {

        if (window.scrollY > 400) {

            backToTop.style.opacity = "1";
            backToTop.style.visibility = "visible";

        } else {

            backToTop.style.opacity = "0";
            backToTop.style.visibility = "hidden";

        }

    });


    // Scroll smoothly to the home section
    backToTop.addEventListener("click", function (event) {

        event.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* ================= DYNAMIC COPYRIGHT YEAR ================= */

const copyright = document.querySelector(".copyright");

if (copyright) {

    const currentYear = new Date().getFullYear();

    copyright.innerHTML =
        `&copy; ${currentYear} Meera Aziz | All Rights Reserved.`;

}


/* ================= CONTACT FORM ================= */

// The form needs a backend or form service to send messages.
// This script only prevents accidental page reloads.

const contactForm = document.querySelector(".contact-form form");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        alert(
            "Thank you for your message! " +
            "The contact form is not connected to a sending service yet."
        );

    });

}


/* ================= CONSOLE MESSAGE ================= */

console.log("Welcome to INNOVISTA Portfolio!");
console.log("Designed and developed by Meera Aziz.");