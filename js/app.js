/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/

const sections = document.querySelectorAll('section')
const navList = document.getElementById('navbar__list')


// build the nav
function createNavList(){
  for (let sec of sections){
    let section = document.createElement('li');
    section.className = 'menu__link';
    section.innerHTML = `<a href="#${sec.id}" class="${sec.id}" >${sec.dataset.nav}</a>`;
    navList.appendChild(section);
  };
};
createNavList();


// Add class 'active' to section when near top of viewport

document.addEventListener('scroll', () => {
  for (let section of sections) {

    const id = section.getAttribute('id');
    const sectionBox = section.getBoundingClientRect();

    if (sectionBox.top <= 150 && sectionBox.bottom >= 150) {
      section.classList.add('your-active-class');
      document.querySelector(`.${id}`).classList.add('active');
    } else {
      section.classList.remove('your-active-class');
      document.querySelector(`.${id}`).classList.remove('active');
    }

  }
})

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
