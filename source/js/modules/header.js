const headerContainerElement = document.querySelector('[data-page-header]');
const headerElement = headerContainerElement.querySelector('.page-header__wrap');

const MEDIA_DESKTOP_BREAKPOINT = '(max-width: 1023px)';

const breakpoint = window.matchMedia(MEDIA_DESKTOP_BREAKPOINT);

const scrollPos = 1;
const headerHeight = headerElement.offsetHeight;

const initStickyHeader = () => {
  if (headerContainerElement) {
    if (!breakpoint.matches) {
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
    } else {
      headerElement.classList.remove('is-sticky');
      headerContainerElement.style.paddingBottom = 0;
    }
  }
  breakpoint.addEventListener('change', initStickyHeader);
};

export {initStickyHeader};
