// Ngaji Roso — interaksi ringan, tanpa dependensi.
(function () {
  var btn = document.querySelector('[data-menu]');
  var nav = document.querySelector('[data-nav]');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') nav.classList.remove('open');
    });
  }
  // Muhasabah: centang tersimpan lokal di perangkat pembaca saja.
  var container = document.querySelector('[data-muhasabah]');
  var edition = container ? (container.getAttribute('data-muhasabah') || '13') : '13';
  var checks = document.querySelectorAll('[data-muhasabah] input[type="checkbox"]');
  checks.forEach(function (box, i) {
    var key = 'ngaji-muhasabah-' + edition + '-' + i;
    try { if (localStorage.getItem(key) === '1') box.checked = true; } catch (e) {}
    box.addEventListener('change', function () {
      try { localStorage.setItem(key, box.checked ? '1' : '0'); } catch (e) {}
    });
  });
})();
