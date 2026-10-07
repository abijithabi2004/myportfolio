/* ================= MOBILE MENU ================= */
const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = function () {
    navbar.classList.toggle("active");
    menuIcon.classList.toggle("fa-xmark");
};

document.querySelectorAll(".navbar a").forEach(function (link) {
    link.onclick = function () {
        navbar.classList.remove("active");
        menuIcon.classList.remove("fa-xmark");
    };
});

/* ================= TYPING EFFECT ================= */
const typingElement = document.getElementById("typing");

const words = [
    "Software Developer",
    "Frontend Developer",
    "Python Learner",
    "AI & Data Science Student"
];

let wordIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];

    if (!deleting) {
        typingElement.textContent = currentWord.substring(0, characterIndex + 1);
        characterIndex++;

        if (characterIndex === currentWord.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }
    } else {
        typingElement.textContent = currentWord.substring(0, characterIndex - 1);
        characterIndex--;

        if (characterIndex === 0) {
            deleting = false;
            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();

/* ================= SKILL ANIMATION ================= */
const skillProgress = document.querySelectorAll(".skill-progress");

const skillObserver = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                const width = entry.target.getAttribute("data-width");
                entry.target.style.width = width;
            }
        });
    },
    {
        threshold: 0.5
    }
);

skillProgress.forEach(function (bar) {
    skillObserver.observe(bar);
});

/* ================= ACTIVE NAVBAR ================= */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", function () {
    let current = "";

    sections.forEach(function (section) {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(function (link) {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

/* ================= TOP BUTTON ================= */
const topButton = document.getElementById("top-button");

window.addEventListener("scroll", function () {
    if (window.scrollY > 400) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
});

topButton.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

/* ================= CONTACT FORM ================= */
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const mailBody =
        "Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message;

    const mailtoLink =
        "mailto:abijithabi1214@gmail.com" +
        "?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(mailBody);

    window.location.href = mailtoLink;
});

/* ================= CURRENT YEAR ================= */
document.getElementById("year").textContent = new Date().getFullYear();