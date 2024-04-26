
function showMenu(){
    const mobileMenu = document.querySelector('#mobileMenu');
    mobileMenu.style.display = 'flex'
}
function hideSidebar (){
    const mobileMenu = document.querySelector('#mobileMenu');
    mobileMenu.style.display = 'none'
}
var card = document.querySelector('.card');
card.addEventListener('click', function() {
  card.classList.toggle('is-flipped');
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("footer form");
  const email = document.querySelector("footer input[type='email']");

  form.addEventListener("submit", (e) => {
      e.preventDefault();

      if (!email.checkValidity()) {
          return;
      }

      // send form data to server
      console.log("Email:", email.value);

      // reset form
      email.value = "";
  });
});

function fadeInSection() {
  var sections = document.querySelectorAll('#fade-in-section');

  sections.forEach(function (section) {
    var sectionTop = section.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (sectionTop < windowHeight) {
      section.style.opacity = '1';
    }
  });
}
window.addEventListener('scroll', fadeInSection);
