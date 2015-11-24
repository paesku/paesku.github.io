(function() {
  var mailTo = document.getElementsByClassName('js-hide-mail');

  for (var i = 0; i < mailTo.length; i++) {
    mailTo[i].addEventListener('click', function() {
      var link = this;
      replaceMailPlaceholders(link);
    });
  };

  function replaceMailPlaceholders(link) {
    link.href = link.href
      .replace(/AT/, '@')
      .replace(/DOT/, '.');
  };
})();
