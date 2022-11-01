const inputPhoneElements = document.querySelectorAll('[data-input-tel]');

const initInputPhoneMask = () => {
  if (inputPhoneElements) {
    inputPhoneElements.forEach((inputPhoneElement) => {
      inputPhoneElement.onfocus = () => {
        if (inputPhoneElement.value.length === 0) {
          inputPhoneElement.value = '+7(';
        }
      };

      inputPhoneElement.onblur = () => {
        if (inputPhoneElement.value.length <= 3) {
          inputPhoneElement.value = '';
        }
      };

      const mask = new IMask(inputPhoneElement, {
        mask: '+{7}(000)000-00-00',
      });
    });
  }
};

export {initInputPhoneMask};
