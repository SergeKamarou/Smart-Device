const headerContainerElement = document.querySelector('[data-page-header]');
const headerElement = headerContainerElement.querySelector('.page-header__wrap');

const scrollPos = 1;
const headerHeight = headerElement.offsetHeight;

const initStickyHeader = () => {
  if (headerContainerElement) {
    if (document.body.scrollTop > scrollPos || document.documentElement.scrollTop > scrollPos) {
      headerElement.classList.add('is-sticky');
      headerContainerElement.style.paddingBottom = headerHeight + 'px';
    } else {
      headerElement.classList.remove('is-sticky');
      headerContainerElement.style.paddingBottom = 0;
    }

    window.onscroll = function () {
      initStickyHeader();
    };
  }
};

export {initStickyHeader};
