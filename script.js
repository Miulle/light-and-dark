const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';

function toggleDarkLightMode(color) {
    nav.style.backgroundColor = (color === DARK_THEME) ? 'rgb(0 0 0 / 50%)' :'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = (color === DARK_THEME) ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = (color === DARK_THEME) ? 'Dark Mode' : 'Light Mode';
    (color === DARK_THEME) ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    (color === DARK_THEME) ? imageMode(DARK_THEME) : imageMode(LIGHT_THEME);
}

// Dark or Light Images
function imageMode(color) {
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

// Siwtch Theme Dynamically
function switchTheme(event) {
    event.target.checked ? document.documentElement.setAttribute('data-theme', DARK_THEME) : document.documentElement.setAttribute('data-theme', LIGHT_THEME);
    event.target.checked ? localStorage.setItem('theme', DARK_THEME) : localStorage.setItem('theme', LIGHT_THEME);
    event.target.checked ? toggleDarkLightMode(DARK_THEME) : toggleDarkLightMode(LIGHT_THEME);
}

// Event Listender
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === DARK_THEME) {
        toggleSwitch.checked = true;
        toggleDarkLightMode(DARK_THEME);
    }
}
