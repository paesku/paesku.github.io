'use strict';

function sendMail() {
  const mail = 'pascalATcontextstudioDOTde';
  window.location = 'mailto:' + replaceMailPlaceholders(mail);

  function replaceMailPlaceholders(string) {
    return string
      .replace(/AT/, '@')
      .replace(/DOT/, '.');
  }
}
