import { greetUser } from '$utils/greet';
import { validateField } from '$utils/input_validations';

import { regexConstants } from './constants/regex';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'John Doe';
  greetUser(name);

  // get current page
  const currentPage = window.location.pathname;
  // SIGN UP PAGE
  if (currentPage.includes('sign-up')) {
    // Signup Form
    const signupForm = document.querySelector('[wized=signup_form]') as HTMLFormElement;

    // Signup Form Fields
    const firstname = document.querySelector('[wized=first_name]') as HTMLInputElement;
    const middlename = document.querySelector('[wized=middle_name]') as HTMLInputElement;
    const lastname = document.querySelector('[wized=last_name]') as HTMLInputElement;
    const username = document.querySelector('[wized=signup_username]') as HTMLInputElement;
    const email = document.querySelector('[wized=signup_email]') as HTMLInputElement;
    const password = document.querySelector('[wized=signup_password]') as HTMLInputElement;
    // Submit button
    const signupSubmitButton = document.querySelector('[wized=signup_submit]') as HTMLButtonElement;

    validateField({
      inputField: firstname,
      validationRegex: regexConstants.firstname,
      customErrorMessage: 'First name can only contains letters (at least 2 letters required)',
    });
    validateField({
      inputField: middlename,
      validationRegex: regexConstants.middlename,
      customErrorMessage: 'Middle name can only contains letters',
    });
    validateField({
      inputField: lastname,
      validationRegex: regexConstants.lastname,
      customErrorMessage: 'Last name can only contains letters',
    });
    validateField({
      inputField: username,
      validationRegex: regexConstants.username,
      customErrorMessage: 'User name can only contains letters and numbers',
    });
    validateField({
      inputField: email,
      validationRegex: regexConstants.email,
      customErrorMessage: 'Must be a valid email address',
    });
    validateField({
      inputField: password,
      validationRegex: regexConstants.password,
      customErrorMessage:
        'Password must be at least 8 characters long and contain at least one lower and upper case letter, one digit, and one symbol',
    });

    if (signupForm && signupSubmitButton) {
      signupForm.addEventListener('input', () => {
        const isValid = signupForm.checkValidity();
        if (isValid) {
          signupSubmitButton.classList.remove('is-disabled');
        } else {
          signupSubmitButton.classList.add('is-disabled');
        }
      });
    }
  }

  // LOGIN PAGE
  if (currentPage.includes('log-in')) {
    // Login Form
    const loginForm = document.querySelector('[wized=login_form]') as HTMLFormElement;
    // Login Form Fields
    const email = document.querySelector('[wized=login_email]') as HTMLInputElement;
    const password = document.querySelector('[wized=login_password]') as HTMLInputElement;
    // Submit button
    const loginSubmitButton = document.querySelector('[wized=login_submit]') as HTMLButtonElement;

    // Validate inputs
    validateField({
      inputField: email,
      validationRegex: regexConstants.email,
      customErrorMessage: 'Must be a valid Email Address',
    });
    validateField({
      inputField: password,
      validationRegex: regexConstants.password,
      customErrorMessage:
        'Password must be at least 8 characters long and contain at least one lower and upper case letter, one digit, and one symbol',
    });

    // Check if form is valid
    if (loginForm && loginSubmitButton) {
      loginForm.addEventListener('input', () => {
        const isValid = loginForm.checkValidity();
        if (isValid) {
          loginSubmitButton.classList.remove('is-disabled');
        } else {
          loginSubmitButton.classList.add('is-disabled');
        }
      });
    }
  }
});
