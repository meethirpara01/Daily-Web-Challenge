console.log("WEB DESIGN");

const menuBtn = document.querySelector('.line');
const mobileMenu = document.querySelector('.menuMobile');

menuBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent click from bubbling to document
    const isVisible = mobileMenu.style.display === 'flex';
    mobileMenu.style.display = isVisible ? 'none' : 'flex';
    mobileMenu.style.zIndex = isVisible ? '-1' : '1';
});

// Close the menu when clicking outside
document.addEventListener('click', (e) => {
    const isClickInsideMenu = mobileMenu.contains(e.target);
    const isClickOnMenuBtn = menuBtn.contains(e.target);

    if (!isClickInsideMenu && !isClickOnMenuBtn) {
        mobileMenu.style.display = 'none';
    }
});

// Optional: Reset when resizing to desktop view
window.addEventListener('resize', () => {
    if (window.innerWidth >= 780) {
        mobileMenu.style.display = 'none';
    }
});
