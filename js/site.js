// Phone menu: the Menu button shows and hides the page links below 760 px.
(function () {
  var header = document.querySelector('.site-header');
  var button = header && header.querySelector('.menu-toggle');
  if (!button) return;
  var label = button.querySelector('.menu-label');

  function setOpen(open) {
    header.classList.toggle('menu-open', open);
    button.setAttribute('aria-expanded', open ? 'true' : 'false');
    label.textContent = open ? 'Close' : 'Menu';
  }

  button.addEventListener('click', function () {
    setOpen(!header.classList.contains('menu-open'));
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && header.classList.contains('menu-open')) {
      setOpen(false);
      button.focus();
    }
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 760 && header.classList.contains('menu-open')) setOpen(false);
  });
})();
