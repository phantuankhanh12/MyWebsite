// script.js

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example: Modal close button functionality
$('#exampleModal').on('hidden.bs.modal', function (e) {
    // Additional code to run after modal closes
    console.log('Modal closed');
});
