import Flickity from 'flickity';

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

document.addEventListener('DOMContentLoaded', function() {
  var flkty = new Flickity('.gallery', {
    cellAlign: 'left',
    contain: true,
    prevNextButtons: false,
    pageDots: false
  });
});