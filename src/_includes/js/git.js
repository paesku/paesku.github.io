(function () {
  'use strict';

  onInit();

  function onInit() {
    document
      .querySelectorAll('[id]')
      .forEach(node => node.insertAdjacentHTML('beforeend', ' <a class="up" data-up>⬆</a>'));

    document
      .querySelectorAll('[data-up]')
      .forEach(node => node.addEventListener('click', scrollToTop));
  }

  function scrollToTop(event) {
    event.preventDefault();
    window.scrollTo({top: 0, left: 0, behavior: 'auto'});
  }
})();
