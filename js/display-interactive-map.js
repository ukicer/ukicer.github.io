//Logic for displaying the interactive once the DOM content of venue.html has loaded
document.addEventListener('DOMContentLoaded', function() {

    //Set zoom of map to be more zoomed out for smaller screens
    var initialZoom = 13.5;
    if (window.innerWidth < 1000) {
        initialZoom = 13;
    }

    //Initialise open street map and orient to Cambridge
    var map = L.map('interactive-map', {
        center: [52.216, 0.112],
        zoom: initialZoom
    });

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    //Add markers for various conference locations
    //TODO: Pretty up positions of popups
    L.marker([52.21, 0.09]).addTo(map)
    .bindPopup('Conference venue', {closeOnClick: false, autoClose: false})
    .openPopup();

    L.marker([52.219, 0.087]).addTo(map)
    .bindPopup('Hyatt Centric hotel', {closeOnClick: false, autoClose: false})
    .openPopup();

    L.marker([52.21, 0.116]).addTo(map)
    .bindPopup('Conference dinner venue', {closeOnClick: false, autoClose: false})
    .openPopup();
});