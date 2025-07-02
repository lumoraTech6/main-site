  const header = document.getElementById('main-header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
                

            } else {
                header.classList.remove('scrolled');
            }
        });

        const hamburger = document.querySelector(".hamburger");
        const navLinks = document.querySelector(".nav-links");

        const toggleMenu = () => {
            hamburger.classList.toggle("active");
            navLinks.classList.toggle("active");
        };

        hamburger.addEventListener("click", (e) => {
            e.stopPropagation();
            toggleMenu();
        });

        document.querySelectorAll(".nav-links li").forEach(n => n.addEventListener("click", () => {
            if (navLinks.classList.contains('active')) {
                toggleMenu();
            }
        }));
        
        document.addEventListener('click', (e) => {
            if (navLinks.classList.contains('active') && !navLinks.contains(e.target) && !hamburger.contains(e.target)) {
                toggleMenu();
            }
        });