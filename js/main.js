// First call
ScrollHeight();

// Redraw when viewport is modified
window.addEventListener('resize', function (event) {
  ScrollHeight();
});

function ScrollHeight() {
  var content = document.querySelector('#parchment');
  var container = document.querySelector('#contain');

  // SVG feTurbulence can modify all others elements, that's why "parchment" is in absolute position.
  // so for a better effect, absolute height is defined by his content.
  content.style.height = container.offsetHeight + 'px';
}
