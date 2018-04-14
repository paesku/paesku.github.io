(function () {
  const sections = document.querySelectorAll('.section');
  const navigations =  document.querySelectorAll('.navigation-item');

  navigations.forEach(navigation => navigation.addEventListener('click', scrollTo));

  function scrollTo(event){
    event.preventDefault();
    const targetElement = document.getElementById(this.dataset.target);
    const top = sectionPosition(targetElement);
    smoothScrollTo({top});
    markActiveNavigation(this)
  }

  function sectionPosition(section){
    return section.getBoundingClientRect().top;
  }

  function smoothScrollTo(config){
    const defaultConfig = {top: 0, left: 0,  behavior: 'smooth'};
    window.scrollBy(Object.assign({}, defaultConfig, config));
  }

  function markActiveNavigation(element) {
    navigations.forEach(navigation => navigation.classList.remove('active'));
    element.classList.add('active');
  }
})();
