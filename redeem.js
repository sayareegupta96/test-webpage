// Basic mobile menu toggle and dynamic greeting
window.addEventListener('DOMContentLoaded', function() {
    // Example: Responsive image sizing
    var img = document.querySelector('img[alt="love"]');
    if (img) {
        img.style.maxWidth = '100%';
        img.style.height = 'auto';
    }

    // Example: Dynamic greeting (could be extended)
    var h1 = document.querySelector('h1');
    if (h1) {
        h1.textContent = 'Thank you for your earnest service!';
    }
    if (h2) {
        h2.textContent = 'Wishing you many more successful years with the company.';
    }
});
