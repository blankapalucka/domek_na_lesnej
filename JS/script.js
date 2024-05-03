// let map;

// async function initMap() {
//   // The location of Uluru
//   const position = { lat: -25.344, lng: 131.031 };
//   // Request needed libraries.
//   //@ts-ignore
//   const { Map } = await google.maps.importLibrary("maps");
//   const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

//   // The map, centered at Uluru
//   map = new Map(document.getElementById("map"), {
//     zoom: 4,
//     center: position,
//     mapId: "DEMO_MAP_ID",
//   });

//   // The marker, positioned at Uluru
//   const marker = new AdvancedMarkerElement({
//     map: map,
//     position: position,
//     title: "Uluru",
//   });
// }

// initMap();

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
const options = { root: null, rootMargin: '0px', threshold: 1 };

document.querySelectorAll('.example-photo').forEach(el => {
    observer.observe(el, options);
});


