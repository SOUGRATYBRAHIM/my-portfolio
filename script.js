// Mobile menu toggle
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

if (menu && navbar) {
    menu.onclick = () => {
        menu.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };

    window.onscroll = () => {
        menu.classList.remove('bx-x');
        navbar.classList.remove('active');
    };
}

// Typed.js animation
const typedElement = document.querySelector('.multiple-text');
if (typedElement) {
    const typed = new Typed('.multiple-text', {
        strings: ['Front-end Developer', 'Back-end Developer', 'SEO Service Provider', 'Copywriter'],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1400,
        loop: true,
    });
}

// Header scroll effect
const header = document.querySelector("header");
if (header) {
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
}

// Tab functionality
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Read More buttons functionality
document.addEventListener('DOMContentLoaded', function () {
    // Skills slider pause on hover
    const slider = document.querySelector('.skills-slider-track');
    if (slider) {
        slider.addEventListener('mouseenter', () => {
            slider.style.animationPlayState = 'paused';
        });

        slider.addEventListener('mouseleave', () => {
            slider.style.animationPlayState = 'running';
        });
    }

    // Read More buttons
    document.querySelectorAll('.btn[href^="#"]').forEach(link => {
        link.addEventListener('click', function (event) {
            const href = this.getAttribute('href');
            // Only prevent default for internal hash links that aren't navigation
            if (href.startsWith('#') && !href.match(/#(home|about|services|portfolio|contact)$/)) {
                event.preventDefault();
                let target = document.querySelector(href);
                if (target) {
                    target.classList.toggle('hidden');
                }
            }
        });
    });

    // Active navigation links on scroll
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");
    const headerHeight = header ? header.offsetHeight : 0;

    if (navLinks.length > 0) {
        // Set initial active link (Home)
        navLinks[0].classList.add("active");

        window.addEventListener("scroll", function () {
            let current = "";

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;

                // Check if section is in view (with header height offset)
                if (window.scrollY >= sectionTop - headerHeight &&
                    window.scrollY < sectionTop + sectionHeight - headerHeight) {
                    current = section.getAttribute("id");
                }
            });

            // Update active class
            navLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${current}`) {
                    link.classList.add("active");
                }
            });
        });
    }

    // scroll to top button

    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    window.onscroll = function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    };

    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

let cursorDot = document.querySelector('.cursor-dot');
let cursorOutline = document.querySelector('.cursor-outline');

document.addEventListener('mousemove', function (e) {
    cursorDot.style.left = e.clientX + 'px';
    cursorDot.style.top = e.clientY + 'px';
    cursorOutline.style.left = e.clientX + 'px';
    cursorOutline.style.top = e.clientY + 'px';
});


