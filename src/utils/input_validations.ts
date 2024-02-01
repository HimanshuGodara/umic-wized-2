interface FieldValidationOptions {
  inputField: HTMLInputElement;
  validationRegex: RegExp;
  customErrorMessage: string;
}

export function validateField({
  inputField,
  validationRegex,
  customErrorMessage,
}: FieldValidationOptions): void {
  inputField.addEventListener('input', function () {
    const inputValue = inputField.value;
    const label = findLabelForInput(inputField);

    const isValid = validationRegex.test(inputValue);

    if (inputValue.trim() === '' || !isValid) {
      inputField.setCustomValidity(
        inputValue.trim() === '' ? 'This field is required.' : customErrorMessage
      );
      inputField.classList.add('is-invalid');
      label?.classList.add('is-invalid');
    } else {
      inputField.setCustomValidity('');
      inputField.classList.remove('is-invalid');
      label?.classList.remove('is-invalid');
    }
    inputField.reportValidity();
  });
}

function findLabelForInput(inputField: HTMLInputElement): HTMLLabelElement | null {
  const { id } = inputField;
  if (id) {
    return document.querySelector(`label[for="${id}"]`);
  }
  return null;
}

// function findLabelForInput(inputField: HTMLInputElement): HTMLLabelElement | null {
//   const wizedAttribute = inputField.getAttribute('wized');
//   if (wizedAttribute) {
//     // Assuming wized attribute values are unique identifiers for labels
//     return document.querySelector(`label[wized="${wizedAttribute}"]`);
//   }
//   return null;
// }
