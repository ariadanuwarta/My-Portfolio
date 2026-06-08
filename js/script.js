/* =======================================================
   PORTFOLIO 2026
   MAIN SCRIPT
======================================================= */

/* =======================================================
   LOADER
======================================================= */

const loader = document.getElementById("loader");
const progressBar = document.querySelector(".loading-progress");

let progress = 0;

const loadingInterval = setInterval(() => {

    progress += 1;

    progressBar.style.width = progress + "%";

    if (progress >= 100) {

        clearInterval(loadingInterval);

        setTimeout(() => {

            loader.style.opacity = "0";

            loader.style.visibility = "hidden";

        }, 500);

    }

}, 20);

/* =======================================================
   AOS
======================================================= */

AOS.init({

    duration: 1000,
    once: true,
    offset: 120

});

/* =======================================================
   TYPING EFFECT
======================================================= */

new Typed(".typing", {

    strings: [

        "Frontend Developer",
        "UI / UX Designer",
        "Web Designer",
        "JavaScript Developer",
        "Freelancer"

    ],

    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 1500,
    loop: true

});

/* =======================================================
   DARK MODE
======================================================= */

const themeToggle =
document.getElementById("themeToggle");

const body =
document.body;

const savedTheme =
localStorage.getItem("theme");

if (savedTheme === "light") {

    body.classList.add("light-mode");

}

themeToggle.addEventListener("click", () => {

    body.classList.toggle("light-mode");

    if (
        body.classList.contains("light-mode")
    ) {

        localStorage.setItem(
            "theme",
            "light"
        );

    } else {

        localStorage.setItem(
            "theme",
            "dark"
        );

    }

});

/* =======================================================
   CUSTOM CURSOR
======================================================= */

const cursor =
document.querySelector(".cursor");

document.addEventListener(
    "mousemove",
    (e) => {

        cursor.style.left =
        e.clientX + "px";

        cursor.style.top =
        e.clientY + "px";

    }
);

document.querySelectorAll(
    "a,button"
).forEach((item) => {

    item.addEventListener(
        "mouseenter",
        () => {

            cursor.style.transform =
            "translate(-50%, -50%) scale(1.6)";

        }
    );

    item.addEventListener(
        "mouseleave",
        () => {

            cursor.style.transform =
            "translate(-50%, -50%) scale(1)";

        }
    );

});

/* =======================================================
   PARTICLES JS
======================================================= */

particlesJS("particles-js", {

    particles: {

        number: {

            value: 70,

            density: {

                enable: true,

                value_area: 800

            }

        },

        color: {

            value: "#7c3aed"

        },

        shape: {

            type: "circle"

        },

        opacity: {

            value: 0.5

        },

        size: {

            value: 3

        },

        line_linked: {

            enable: true,

            distance: 150,

            color: "#7c3aed",

            opacity: 0.4,

            width: 1

        },

        move: {

            enable: true,

            speed: 2

        }

    },

    interactivity: {

        detect_on: "canvas",

        events: {

            onhover: {

                enable: true,

                mode: "repulse"

            }

        }

    },

    retina_detect: true

});

/* =======================================================
   COUNTER
======================================================= */

const counters =
document.querySelectorAll(".counter");

const runCounter = () => {

    counters.forEach(counter => {

        const target =
        +counter.dataset.target;

        const updateCounter = () => {

            const current =
            +counter.innerText;

            const increment =
            target / 100;

            if (current < target) {

                counter.innerText =
                `${Math.ceil(
                    current + increment
                )}`;

                setTimeout(
                    updateCounter,
                    20
                );

            } else {

                counter.innerText =
                target;

            }

        };

        updateCounter();

    });

};

const counterSection =
document.querySelector(".achievement");

let counterStarted = false;

window.addEventListener(
    "scroll",
    () => {

        if (!counterSection) return;

        const position =
        counterSection.getBoundingClientRect();

        if (
            position.top <
            window.innerHeight &&
            !counterStarted
        ) {

            runCounter();

            counterStarted = true;

        }

    }
);

/* =======================================================
   BACK TO TOP
======================================================= */

const backToTop =
document.getElementById(
    "backToTop"
);

window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 500
        ) {

            backToTop.classList.add(
                "show"
            );

        } else {

            backToTop.classList.remove(
                "show"
            );

        }

    }
);

backToTop.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);/* =======================================================
   MOBILE MENU
======================================================= */

const menuBtn =
document.getElementById("menuBtn");

const navbar =
document.querySelector(".navbar");

if (menuBtn && navbar) {

    menuBtn.addEventListener(
        "click",
        () => {

            navbar.classList.toggle(
                "active"
            );

        }
    );

}

/* =======================================================
   ACTIVE NAV LINK
======================================================= */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(
    ".navbar a"
);

window.addEventListener(
    "scroll",
    () => {

        let current = "";

        sections.forEach(
            (section) => {

                const sectionTop =
                section.offsetTop;

                const sectionHeight =
                section.clientHeight;

                if (
                    pageYOffset >=
                    sectionTop - 200
                ) {

                    current =
                    section.getAttribute(
                        "id"
                    );

                }

            }
        );

        navLinks.forEach(
            (link) => {

                link.classList.remove(
                    "active"
                );

                if (
                    link.getAttribute(
                        "href"
                    ) ===
                    `#${current}`
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );

    }
);

/* =======================================================
   STICKY HEADER
======================================================= */

const header =
document.querySelector(".header");

window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 100
        ) {

            header.style.background =
            "rgba(0,0,0,.85)";

            header.style.boxShadow =
            "0 5px 25px rgba(0,0,0,.3)";

        } else {

            header.style.background =
            "rgba(0,0,0,.4)";

            header.style.boxShadow =
            "none";

        }

    }
);

/* =======================================================
   SCROLL REVEAL
======================================================= */

const revealElements =
document.querySelectorAll(

    ".fade-up, .fade-left, .fade-right"

);

function revealOnScroll() {

    revealElements.forEach(
        (element) => {

            const top =
            element.getBoundingClientRect()
            .top;

            const trigger =
            window.innerHeight - 100;

            if (top < trigger) {

                element.classList.add(
                    "show"
                );

            }

        }
    );

}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();

/* =======================================================
   CONTACT FORM
======================================================= */

const contactForm =
document.querySelector(
    ".contact-form"
);

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        (e) => {

            e.preventDefault();

            const inputs =
            contactForm.querySelectorAll(
                "input, textarea"
            );

            let valid = true;

            inputs.forEach(
                (input) => {

                    if (
                        input.value.trim() ===
                        ""
                    ) {

                        valid = false;

                        input.style.borderColor =
                        "#ef4444";

                    } else {

                        input.style.borderColor =
                        "";

                    }

                }
            );

            if (valid) {

                alert(
                    "Message sent successfully!"
                );

                contactForm.reset();

            }

        }
    );

}

/* =======================================================
   HERO PARALLAX EFFECT
======================================================= */

const heroImage =
document.querySelector(
    ".profile-card"
);

window.addEventListener(
    "mousemove",
    (e) => {

        if (!heroImage) return;

        const x =
        (window.innerWidth / 2 -
        e.clientX) / 40;

        const y =
        (window.innerHeight / 2 -
        e.clientY) / 40;

        heroImage.style.transform =
        `rotateY(${x}deg)
         rotateX(${-y}deg)`;

    }
);

/* =======================================================
   PROJECT HOVER EFFECT
======================================================= */

const projectCards =
document.querySelectorAll(
    ".project-card"
);

projectCards.forEach(
    (card) => {

        card.addEventListener(
            "mousemove",
            (e) => {

                const rect =
                card.getBoundingClientRect();

                const x =
                e.clientX - rect.left;

                const y =
                e.clientY - rect.top;

                card.style.setProperty(
                    "--x",
                    `${x}px`
                );

                card.style.setProperty(
                    "--y",
                    `${y}px`
                );

            }
        );

    }
);

/* =======================================================
   LAZY IMAGE LOADING
======================================================= */

const lazyImages =
document.querySelectorAll("img");

const imageObserver =
new IntersectionObserver(

    (entries, observer) => {

        entries.forEach(
            (entry) => {

                if (
                    entry.isIntersecting
                ) {

                    const img =
                    entry.target;

                    img.classList.add(
                        "loaded"
                    );

                    observer.unobserve(
                        img
                    );

                }

            }
        );

    }

);

lazyImages.forEach(
    (img) => {

        imageObserver.observe(
            img
        );

    }
);

/* =======================================================
   SMOOTH PAGE ENTRANCE
======================================================= */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "page-loaded"
        );

    }
);

/* =======================================================
   PERFORMANCE
======================================================= */

window.addEventListener(
    "resize",
    () => {

        clearTimeout(
            window.resizedFinished
        );

        window.resizedFinished =
        setTimeout(
            () => {

                console.log(
                    "Resize Finished"
                );

            },
            250
        );

    }
);

/* =======================================================
   GITHUB PROFILE AUTO UPDATE
======================================================= */
/*
Contoh:

const githubUser = "USERNAME";

fetch(
`https://api.github.com/users/${githubUser}`
)
.then(res => res.json())
.then(data => {

    console.log(data);

});

*/

/* =======================================================
   YEAR AUTO UPDATE
======================================================= */

const yearText =
document.querySelector(
    ".footer-bottom p"
);

if (yearText) {

    yearText.innerHTML =
    `© ${new Date().getFullYear()}
     Doven Z.
     All Rights Reserved.`;

}

/* =======================================================
   END OF FILE
======================================================= */

console.log(
    "%cPortfolio Loaded Successfully",
    "color:#7c3aed;font-size:18px;font-weight:bold;"
);