import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {initStickyHeader} from './modules/header';
import {initAccordion} from './modules/footer-accordion';
import {initDisplayText} from './modules/show-more';
import {initInputPhoneMask} from './modules/inputmask';

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();

  initStickyHeader();
  initAccordion();
  initDisplayText();
  initInputPhoneMask();

  window.addEventListener('load', () => {
    initModals();
  });
});
