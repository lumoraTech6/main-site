document.addEventListener('DOMContentLoaded', function() {

    const header = document.getElementById('main-header');
    const body = document.body;

    // --- Header Style Management ---
    const updateHeaderStyle = () => {
        if (!header) return; // Exit if header doesn't exist

        const isScrolled = window.scrollY > 50;
        const isLightTheme = body.classList.contains('light-bg');

        if (isScrolled) {
            // When scrolled, always use the dark, solid header style
            header.classList.add('scrolled');
            header.classList.remove('light-theme-active');
        } else {
            // When at the top of the page
            header.classList.remove('scrolled');
            if (isLightTheme) {
                // On a light page at the top, use light theme styles
                header.classList.add('light-theme-active');
            } else {
                // On a dark page at the top, remove light theme styles
                header.classList.remove('light-theme-active');
            }
        }
    };

    // Set initial header style on page load and update on scroll
    updateHeaderStyle();
    window.addEventListener('scroll', updateHeaderStyle);


    // --- Hamburger Menu Functionality ---
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (hamburger && navLinks) {
        const toggleMenu = () => {
            hamburger.classList.toggle("active");
            navLinks.classList.toggle("active");
        };

        hamburger.addEventListener("click", (e) => {
            e.stopPropagation(); // Prevents the document click listener from firing immediately
            toggleMenu();
        });

        // Close menu when a link is clicked
        document.querySelectorAll(".nav-links li a").forEach(link => {
            link.addEventListener("click", () => {
                if (navLinks.classList.contains('active')) {
                    toggleMenu();
                }
            });
        });

        // Close menu when clicking outside of it
        document.addEventListener('click', (e) => {
            if (navLinks.classList.contains('active') && !navLinks.contains(e.target) && !hamburger.contains(e.target)) {
                toggleMenu();
            }
        });
    }

    // --- FAQ Accordion Functionality ---
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Optional: Close all other items before opening a new one
            // faqItems.forEach(otherItem => {
            //     if (otherItem !== item) {
            //        otherItem.classList.remove('active');
            //     }
            // });

            // Toggle the active class on the clicked item
            item.classList.toggle('active');
        });
    });

});
