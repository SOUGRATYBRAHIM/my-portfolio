let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const typed = new Typed('.multiple-text', {
    strings: ['Front-end Developer', 'Back-end Developer', 'Seo Service Provider','Copywriter'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1400,
    loop: true,
});

    window.addEventListener("scroll", function () {
        let header = document.querySelector("header");
            if (window.scrollY > 50) {  // When scrolled 50px down
        header.classList.add("scrolled");
            } else {
        header.classList.remove("scrolled");
            }
        });

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

document.querySelectorAll('.btn').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        let target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.classList.toggle('hidden');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Function to animate skill bars
    function animateSkills() {
        const skillProgresses = document.querySelectorAll('.skill-progress');

        skillProgresses.forEach(progress => {
            const percent = progress.getAttribute('data-percent');
            progress.style.width = '0';

            // Trigger animation after a small delay
            setTimeout(() => {
                progress.style.width = `${percent}%`;
            }, 100);
        });
    }
    })

    document.addEventListener('DOMContentLoaded', function () {
        const slider = document.querySelector('.skills-slider-track');

        slider.addEventListener('mouseenter', () => {
            slider.style.animationPlayState = 'paused';
        });

        slider.addEventListener('mouseleave', () => {
            slider.style.animationPlayState = 'running';
        });
    });

// -----------------active links-----------------

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", function () {
        let current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop - 100) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });
});


