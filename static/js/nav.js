var navbarId = "navbar";
var primaryNavId = "primaryNav";
var navToggleId = "navToggle";
var searchToggleId = "searchToggle";
var searchBoxId = "searchBox";
var searchClearId = "searchClear";
var searchInputId = "q";
var prevScrollposition = window.pageYOffset;


const navber = document.getElementById(navbarId);
const primaryNav = document.getElementById(primaryNavId);
const navToggle = document.getElementById(navToggleId);
const searchToggle = document.getElementById(searchToggleId);
const searchBox = document.getElementById(searchBoxId);
const searchClear = document.getElementById(searchClearId);
const searchInput = document.getElementById(searchInputId);


/* Toggle Menu */
navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute("data-visible");

    if (visibility === 'false') {
        primaryNav.setAttribute('data-visible', true);
        searchBox.setAttribute('data-visible', false)
    }
    else if (visibility === 'true') {
        primaryNav.setAttribute('data-visible', false);
    }
});

/* Toggle Search */
searchToggle.addEventListener('click', () => {
    const visibility = searchBox.getAttribute("data-visible")

    if (visibility === 'false') {
        primaryNav.setAttribute('data-visible', false);
        searchBox.setAttribute('data-visible', true);
        searchInput.focus();
    }
    else if (visibility === 'true') {
        searchBox.setAttribute('data-visible', false);
        searchInput.value = '';
    }
});

/* Clear Search input */
searchClear.addEventListener('click', () => {
    searchInput.value = '';
});

/* Hide navbar on scroll down, show on scroll up */
window.onscroll = function() {
    const visibilitySearch = primaryNav.getAttribute("data-visible");
    const visibilityNav = searchBox.getAttribute("data-visible");
    var currentScrollPosition = window.pageYOffset;
    if (visibilityNav === 'true' || visibilitySearch === 'true') {
        navbar.style.top = "0";
    } else if (prevScrollposition > currentScrollPosition) {
        navbar.style.top = "0";
    } else {
        navbar.style.top = "-3rem";
    }
    prevScrollposition = currentScrollPosition;
}
