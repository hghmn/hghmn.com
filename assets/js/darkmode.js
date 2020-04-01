// HACK: heavy-handed dark mode switching
(function() {
  var $body = document.body
  var $mode = document.querySelector('#mode')
  var $btn = $mode.querySelectorAll('span')

  let mode = 0
  if (localStorage.darkMode) {
    if (localStorage.darkMode == 1) {
      mode = 1
      addClass($body, 'dark-mode')
    }
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // dark mode
    mode = 1
    addClass($body, 'dark-mode')
  }

  $mode.addEventListener('click', function(e) {
    let text = e.target.textContent;
    if (text === '/') return;
    mode = ++mode%2;

    $btn.forEach(btn => toggleClass(btn, 'fw6'))
    toggleClass($body, 'dark-mode')
  })

  function toggleClass(el, className) {
    el.classList.toggle(className)
    localStorage.darkMode = mode
  }
  function addClass(el, className) { el.classList.add(className) }
  // function removeClass(el, className) { el.classList.remove(className) }
})()
