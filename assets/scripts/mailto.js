(function () {
  const mailElements = document.getElementsByClassName('js-hide-mail');
  mailElements.forEach(mailElement => mailElement.addEventListener('click', replaceMailPlaceholders(this)));

  function replaceMailPlaceholders(link) {
    link.href = link.href
      .replace(/AT/, '@')
      .replace(/DOT/, '.');
  }
})();
