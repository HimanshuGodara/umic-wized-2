"use strict";
(() => {
  // bin/live-reload.js
  new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());

  // node_modules/.pnpm/@finsweet+ts-utils@0.40.0/node_modules/@finsweet/ts-utils/dist/webflow/getPublishDate.js
  var getPublishDate = (page = document) => {
    const publishDatePrefix = "Last Published:";
    for (const node of page.childNodes) {
      if (node.nodeType === Node.COMMENT_NODE && node.textContent?.includes(publishDatePrefix)) {
        const publishDateValue = node.textContent.trim().split(publishDatePrefix)[1];
        if (publishDateValue)
          return new Date(publishDateValue);
      }
    }
  };

  // src/utils/greet.ts
  var greetUser = (name) => {
    const publishDate = getPublishDate();
    console.log(`Hello ${name}!`);
    console.log(
      `This site was last published on ${publishDate?.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "2-digit"
      })}.`
    );
  };

  // src/utils/input_validations.ts
  function validateField({
    inputField,
    validationRegex,
    customErrorMessage
  }) {
    inputField.addEventListener("input", function() {
      const inputValue = inputField.value;
      const label = findLabelForInput(inputField);
      const isValid = validationRegex.test(inputValue);
      if (inputValue.trim() === "" || !isValid) {
        inputField.setCustomValidity(
          inputValue.trim() === "" ? "This field is required." : customErrorMessage
        );
        inputField.classList.add("is-invalid");
        label?.classList.add("is-invalid");
      } else {
        inputField.setCustomValidity("");
        inputField.classList.remove("is-invalid");
        label?.classList.remove("is-invalid");
      }
      inputField.reportValidity();
    });
  }
  function findLabelForInput(inputField) {
    const { id } = inputField;
    if (id) {
      return document.querySelector(`label[for="${id}"]`);
    }
    return null;
  }

  // src/constants/regex.ts
  var regexConstants = {
    addressline: /^[a-zA-Z0-9.'-]+(\s*[a-zA-Z0-9'-.]+)*\s*$/,
    businessname: /^[a-zA-Z0-9\s.'-]+$/,
    churchname: /^[a-zA-Z0-9\s.'-]+$/,
    description: /^[\x20-\x7E]+$/,
    email: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    firstname: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z])$/,
    jurisdiction: /^[\x20-\x7E]+$/,
    lastname: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z])$/,
    middlename: /^([a-zA-Z]+.? ?)+[a-zA-Z]*$/,
    password: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/,
    phone: /^(?:\d{1}\s)?\(?(\d{3})\)?[-\s]?(\d{3})[-\s]?(\d{4})(?![\d\s.-])$/,
    url: /[(http(s)?)://(www\.)?a-zA-Z0-9@:%._\+-~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&/\\/=]*)/,
    username: /^\w*\d*$/,
    zip: /^\d{5}(-?\d{4})?$/
  };

  // src/index.ts
  window.Webflow ||= [];
  window.Webflow.push(() => {
    const name = "John Doe";
    greetUser(name);
    const currentPage = window.location.pathname;
    if (currentPage.includes("sign-up")) {
      const signupForm = document.querySelector("[wized=signup_form]");
      const firstname = document.querySelector("[wized=first_name]");
      const middlename = document.querySelector("[wized=middle_name]");
      const lastname = document.querySelector("[wized=last_name]");
      const username = document.querySelector("[wized=signup_username]");
      const email = document.querySelector("[wized=signup_email]");
      const password = document.querySelector("[wized=signup_password]");
      const signupSubmitButton = document.querySelector("[wized=signup_submit]");
      validateField({
        inputField: firstname,
        validationRegex: regexConstants.firstname,
        customErrorMessage: "First name can only contains letters (at least 2 letters required)"
      });
      validateField({
        inputField: middlename,
        validationRegex: regexConstants.middlename,
        customErrorMessage: "Middle name can only contains letters"
      });
      validateField({
        inputField: lastname,
        validationRegex: regexConstants.lastname,
        customErrorMessage: "Last name can only contains letters"
      });
      validateField({
        inputField: username,
        validationRegex: regexConstants.username,
        customErrorMessage: "User name can only contains letters and numbers"
      });
      validateField({
        inputField: email,
        validationRegex: regexConstants.email,
        customErrorMessage: "Must be a valid email address"
      });
      validateField({
        inputField: password,
        validationRegex: regexConstants.password,
        customErrorMessage: "Password must be at least 8 characters long and contain at least one lower and upper case letter, one digit, and one symbol"
      });
      if (signupForm && signupSubmitButton) {
        signupForm.addEventListener("input", () => {
          const isValid = signupForm.checkValidity();
          if (isValid) {
            signupSubmitButton.classList.remove("is-disabled");
          } else {
            signupSubmitButton.classList.add("is-disabled");
          }
        });
      }
    }
    if (currentPage.includes("log-in")) {
      const loginForm = document.querySelector("[wized=login_form]");
      const email = document.querySelector("[wized=login_email]");
      const password = document.querySelector("[wized=login_password]");
      const loginSubmitButton = document.querySelector("[wized=login_submit]");
      validateField({
        inputField: email,
        validationRegex: regexConstants.email,
        customErrorMessage: "Must be a valid Email Address"
      });
      validateField({
        inputField: password,
        validationRegex: regexConstants.password,
        customErrorMessage: "Password must be at least 8 characters long and contain at least one lower and upper case letter, one digit, and one symbol"
      });
      if (loginForm && loginSubmitButton) {
        loginForm.addEventListener("input", () => {
          const isValid = loginForm.checkValidity();
          if (isValid) {
            loginSubmitButton.classList.remove("is-disabled");
          } else {
            loginSubmitButton.classList.add("is-disabled");
          }
        });
      }
    }
  });
})();
//# sourceMappingURL=index.js.map
