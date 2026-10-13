/* =========================
   HEADER SCROLL EFFECT
========================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


/* =========================
   MOBILE MENU
========================= */

const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");

if (menuToggle && mobileNav) {

    menuToggle.addEventListener("click", () => {

        mobileNav.classList.toggle("active");

        const icon = menuToggle.querySelector("i");

        if (mobileNav.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }

    });

}


/* =========================
   CLOSE MOBILE MENU
========================= */

const mobileLinks =
    document.querySelectorAll(
        ".mobile-nav a:not(.mobile-dropdown-toggle)"
    );

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileNav.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =========================
   MOBILE SERVICES DROPDOWN
========================= */

const servicesToggle =
    document.getElementById("servicesToggle");

const servicesDropdown =
    document.getElementById("servicesDropdown");

if (servicesToggle && servicesDropdown) {

    servicesToggle.addEventListener("click", function (event) {

        event.preventDefault();

        servicesDropdown.classList.toggle("active");

        servicesToggle.classList.toggle("active");

    });

}


/* =========================
   SCROLL REVEAL ANIMATION
========================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(element => {
    revealObserver.observe(element);
});


/* =========================
   CONTACT FORM
========================= */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const message =
            document.getElementById("message").value.trim();


        if (name === "") {

            formMessage.textContent =
                "Please enter your name.";

            return;
        }


        if (email === "") {

            formMessage.textContent =
                "Please enter your email.";

            return;
        }


        if (message === "") {

            formMessage.textContent =
                "Please enter your message.";

            return;
        }


        formMessage.textContent =
            `Thanks ${name}! Your message has been received.`;

        contactForm.reset();

    });

}


/* =========================
   CURRENT YEAR
========================= */

const yearElement =
    document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* =========================
   CAREERS - APPLY NOW
========================= */

const positionLinks =
    document.querySelectorAll(".position-apply");

positionLinks.forEach(link => {

    link.addEventListener("click", function () {

        const position =
            this.getAttribute("data-position");

        const message =
            document.getElementById("message");

        if (message) {

            message.value =
                `Hello, I'd like to apply for the ${position} position.`;

            message.focus();

        }

    });

});


/* =========================
   WHATSAPP
========================= */

/*
   Add the company's WhatsApp number here.

   Example:
   const whatsappNumber = "919876543210";

   Do NOT add + or spaces.
*/

const whatsappNumber = "";

const whatsappLink =
    document.getElementById("whatsappLink");


if (whatsappLink) {

    if (whatsappNumber !== "") {

        whatsappLink.href =
            `https://wa.me/${whatsappNumber}`;

        whatsappLink.target = "_blank";

        whatsappLink.rel =
            "noopener noreferrer";

    } else {

        whatsappLink.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                alert(
                    "Please add the company's WhatsApp number in script.js."
                );

            }
        );

    }

}


/* =========================
   SMOOTH SCROLL
========================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId =
            this.getAttribute("href");


        if (
            targetId &&
            targetId !== "#"
        ) {

            const target =
                document.querySelector(targetId);


            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }

    });

});


/* =========================
   ESCAPE KEY
========================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        if (mobileNav) {
            mobileNav.classList.remove("active");
        }

        if (menuToggle) {

            const icon =
                menuToggle.querySelector("i");

            if (icon) {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        }

    }

});