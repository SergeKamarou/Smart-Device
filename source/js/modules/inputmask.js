const inputPhoneElements = document.querySelectorAll('[data-input-tel]');

const initInputPhoneMask = () => {
  if (inputPhoneElements) {
    inputPhoneElements.forEach((inputPhoneElement) => {
      inputPhoneElement.onfocus = () => {
        if (inputPhoneElement.value.length === 0) {
          inputPhoneElement.value = '+7(';
          mask.updateValue();
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

      inputPhoneElement.addEventListener('focus', () => {
        if (inputPhoneElement.validity.valueMissing) {
          inputPhoneElement.setCustomValidity('Укажите номер телефона');
        } else if (inputPhoneElement.value.length < 16 && inputPhoneElement.value.length > 3) {
          inputPhoneElement.setCustomValidity('Номер слишком короткий');
        } else if (inputPhoneElement.value === '+7(') {
          inputPhoneElement.setCustomValidity('Укажите номер телефона');
        } else {
          inputPhoneElement.setCustomValidity('');
        }
      });

      inputPhoneElement.addEventListener('input', () => {
        if (inputPhoneElement.validity.valueMissing) {
          inputPhoneElement.setCustomValidity('Укажите номер телефона');
        } else if (inputPhoneElement.value.length < 16 && inputPhoneElement.value.length > 3) {
          inputPhoneElement.setCustomValidity('Номер слишком короткий');
        } else {
          inputPhoneElement.setCustomValidity('');
        }
      });
    });
  }
};

export {initInputPhoneMask};
