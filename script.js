// mobile menu 
document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector(".fa-bars");

    if (menuIcon) {
        menuIcon.onclick = function() {
            const mobileMenu = document.querySelector(".mobile-menu");
            if (mobileMenu) {
                mobileMenu.classList.toggle("expand");
            }

            if (menuIcon.classList.contains("fa-bars")) {
                menuIcon.classList.replace("fa-bars", "fa-times");
            } else if (menuIcon.classList.contains("fa-times")) {
                menuIcon.classList.replace("fa-times", "fa-bars");
            }
        };
    }
});
