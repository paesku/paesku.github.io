(function () {
  'use strict';

  let linkModule = {
    config: {
      section: 'section',
      navigation: 'navigation-item',
    },
    sectionNodes: () => document.querySelectorAll(`.${this.config.section}`),
    sections: () => Array.prototype.slice.call(this.sectionNodes),
    navigations: () => document.querySelectorAll(`.${this.config.navigation}`),
    onInit: onInit,
  };

  linkModule.onInit();

  function onInit() {
    navigations.forEach(navigation => navigation.addEventListener('click', navigateTo));
    window.onscroll = () => onScroll();

    const activeNav = document.querySelectorAll('[data-target]')[0];
    markActiveNavigation(activeNav);
  }

  function onScroll() {
    sections.forEach(section => {
      if (isScrolledIntoView(section)) {
        const activeNav = document.querySelector(`[data-target="${section.id}"]`);
        markActiveNavigation(activeNav);
      }
    });

    function isScrolledIntoView(element) {
      return elementBoundsTop(element) <= 0;
    }
  }

  function navigateTo(event) {
    event.preventDefault();
    const targetElement = document.getElementById(this.dataset.target);
    const top = elementBoundsTop(targetElement);
    smoothScrollTo({top});
    markActiveNavigation(this)
  }

  function elementBoundsTop(element) {
    const {top} = element.getBoundingClientRect();
    return top;
  }

  function smoothScrollTo(config) {
    const defaultConfig = {top: 0, left: 0, behavior: 'smooth'};
    window.scrollBy(Object.assign({}, defaultConfig, config));
  }

  function markActiveNavigation(element) {
    navigations.forEach(navigation => navigation.classList.remove('active'));
    element.classList.add('active');
  }
})();
