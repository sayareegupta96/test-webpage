// Basic mobile menu toggle and dynamic greeting
window.addEventListener('DOMContentLoaded', function() {
    // Example: Responsive image sizing
    var img = document.querySelector('img[alt="cake"]');
    if (img) {
        img.style.maxWidth = '100%';
        img.style.height = 'auto';
    }

    // Example: Dynamic greeting (could be extended)
    var h1 = document.querySelector('h1');
    var h2 = document.querySelector('h2');
    if (h1) {
        h1.textContent = 'Happy 4th Anniversary!';
    }
    if (h2) {
        h2.textContent = 'Round of applause for your dedication, drive and commitment.';
    }
});
