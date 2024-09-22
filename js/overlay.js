document.addEventListener('DOMContentLoaded', () => {
window.onload = function() {
    const overlay = document.querySelector('.overlay');
    overlay.style.opacity = 0;

    setTimeout(() => {
        overlay.style.display = 'none';
    }, 2000);
}});