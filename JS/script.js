
// // Open/Close the dropdown menu if the user clicks on it or outside of it
window.onclick = function (event) {
    if (event.target.matches('.hamburger') || event.target.matches('.hamburger-menu')) {
        document.getElementById("myDropdown").classList.toggle("show");
    } else {
        let dropdownElement = document.getElementById("myDropdown");
        if (dropdownElement.classList.contains("show")) {
            dropdownElement.classList.toggle("show");
        }
    }
}

const startAnimation = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.target.classList.contains("animateTopDown") && !entry.target.classList.contains("myImgTopDown")) {
            entry.target.classList.toggle("myImgTopDown", entry.isIntersecting);
        }
        if (entry.target.classList.contains("animateBottomUp") && !entry.target.classList.contains("myImgBottomUp")) {
            entry.target.classList.toggle("myImgBottomUp", entry.isIntersecting);
        }
    });
};

const observer = new IntersectionObserver(startAnimation);
const options = {root: null, rootMargin: '0px', threshold: 1};

document.querySelectorAll('.example-photo').forEach(el => {
    observer.observe(el, options);
});

// Disappear hamburger menu when scrolled down
const disappearAnimation = (entries, observer) => {
    entries.forEach(entry => {
        const dropdown = document.getElementById("myDropdown")
        if (dropdown.classList.contains("show")) {
            dropdown.classList.toggle("show");
        }
    })
}
const hamburgerIntersectionObserver = new IntersectionObserver(disappearAnimation);
document.querySelectorAll("div.o-nas").forEach(el => {
    hamburgerIntersectionObserver.observe(el, options);
})