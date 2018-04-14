(function () {
  const sections = document.querySelectorAll('.section');
  const reversedSections = Array.prototype.slice.call(sections).reverse();
  const navigations = document.querySelectorAll('.navigation-item');

  navigations.forEach(navigation => navigation.addEventListener('click', navigateTo));
  onInit();
  window.onscroll = () => onScroll();

  function onScroll() {
    reversedSections.forEach(section => {
      if (isScrolledIntoView(section)) {
        const activeNav = document.querySelector(`[data-target="${section.id}"]`);
        markActiveNavigation(activeNav);
      }
    });

    function isScrolledIntoView(element) {
      return elementBoundsTop(element) >= 0;
    }
  }

  function onInit() {
    const activeNav = document.getElementById('intro');
    markActiveNavigation(activeNav);
  }

  function navigateTo(event) {
    event.preventDefault();
    const targetElement = document.getElementById(this.dataset.target);
    const top = elementBoundsTop(targetElement);
    smoothScrollTo({top});
    markActiveNavigation(this)
  }

  function elementBoundsTop(element) {
    const {top} = element.getBoundingClientRect()
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
