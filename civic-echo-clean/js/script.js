var q    = document.getElementById('q');
var cf   = document.getElementById('cf');
var cn   = document.getElementById('cnt');
var none = document.getElementById('none');

if (q) {

  function filt() {
    var t = q.value.toLowerCase().trim();
    var c = cf.value;
    var n = 0;

    document.querySelectorAll('#cards .card').forEach(function (el) {

      var ok = (!c || el.dataset.cat === c) &&
               (!t || el.textContent.toLowerCase().indexOf(t) > -1);

      el.style.display = ok ? '' : 'none';
      if (ok) n++;
    });

    cn.textContent = n + ' report' + (n == 1 ? '' : 's') + ' found';

    none.style.display = n ? 'none' : 'block';
  }

  q.addEventListener('input', filt);
  cf.addEventListener('change', filt);
  filt();
}

var f = document.getElementById('f');

if (f) {
  f.addEventListener('submit', function (e) {
    e.preventDefault();

    document.getElementById('msg').style.display = 'block';

  });
}
