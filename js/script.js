// ----------------- Image animation related scripts -----------------
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
// ------------ End of Image animation related scripts -------

// ----------------- Hamburger menu related scripts -----------------
// // Open/Close the dropdown menu if the user clicks on it or outside of it
window.onclick = function (event) {
    if (event.target.matches('.hamburger') || event.target.matches('.hamburger-menu')) {
        document.getElementById("myDropdown").classList.toggle("show-menu");
    } else {
        let dropdownElement = document.getElementById("myDropdown");
        if (dropdownElement.classList.contains("show-menu")) {
            dropdownElement.classList.toggle("show-menu");
        }
    }
}

// Disappear hamburger menu when scrolled down
const disappearAnimation = (entries, observer) => {
    entries.forEach(entry => {
        const dropdown = document.getElementById("myDropdown")
        if (dropdown?.classList?.contains("show-menu")) {
            dropdown.classList.toggle("show-menu");
        }
    })
}
const hamburgerIntersectionObserver = new IntersectionObserver(disappearAnimation);
document.querySelectorAll("div.o-nas").forEach(el => {
    hamburgerIntersectionObserver.observe(el, options);
})
// ----------------- End of Hamburger menu related scripts ----------

// ----------------- Gallery related scripts -----------------
// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    var previousSlideIndex = slideIndex-1;
    slides[previousSlideIndex].style.display = "block";
    dots[previousSlideIndex].className += " active";
    captionText.innerHTML = dots[previousSlideIndex].alt;
}
// ----------------- Gallery related scripts End -----------------