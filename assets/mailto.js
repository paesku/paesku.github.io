(function() {
  var mail = document.getElementById('mailContact');
  mail.addEventListener('click', function(e) {
    this.href = this.href
      .replace(/AT/, '@')
      .replace(/DOT/, '.');
  });
})();
