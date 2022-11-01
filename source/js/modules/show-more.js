const aboutContainerElement = document.querySelector('[data-about]');
const textElements = aboutContainerElement.querySelectorAll('p');
const buttonElement = aboutContainerElement.querySelector('button');
const textElementMobile = aboutContainerElement.querySelector('span');

const DISPLAY_PARAGRAPHS_COUNT = 2;
const BUTTON_TEXT_DISPLAY = 'Свернуть';
const BUTTON_TEXT_HIDE = 'Подробнее';

const initDisplayText = () => {
  if (aboutContainerElement && textElements.length > 1) {
    for (let i = DISPLAY_PARAGRAPHS_COUNT; i < textElements.length; i++) {
      textElements[i].hidden = true;
    }

    buttonElement.classList.add('is-active');
    aboutContainerElement.classList.add('is-hide');

    buttonElement.addEventListener('click', () => {
      if (aboutContainerElement.classList.contains('is-hide')) {
        textElements.forEach((element) => {
          element.hidden = false;
        });
        textElementMobile.classList.add('is-open');
        aboutContainerElement.classList.remove('is-hide');
        buttonElement.textContent = BUTTON_TEXT_DISPLAY;
      } else {
        for (let i = DISPLAY_PARAGRAPHS_COUNT; i < textElements.length; i++) {
          textElements[i].hidden = true;
        }
        aboutContainerElement.classList.add('is-hide');
        textElementMobile.classList.remove('is-open');
        buttonElement.textContent = BUTTON_TEXT_HIDE;
      }
    });
  }
};

export {initDisplayText};
