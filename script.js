document.addEventListener('DOMContentLoaded', function() {
    // Project item hover effect
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'scale(1.05)';
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = 'scale(1)';
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Header scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            document.querySelector("header").classList.add("header-scrolled");
        } else {
            document.querySelector("header").classList.remove("header-scrolled");
        }
    });
});
// script.js (Simplified)

document.addEventListener('DOMContentLoaded', function() {
    // We are removing all Javascript functionality to test the html links.
});
