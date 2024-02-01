export const regexConstants = {
  addressline: /^[a-zA-Z0-9.'-]+(\s*[a-zA-Z0-9'-.]+)*\s*$/,
  businessname: /^[a-zA-Z0-9\s.'-]+$/,
  churchname: /^[a-zA-Z0-9\s.'-]+$/,
  description: /^[\x20-\x7E]+$/,
  email:
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  firstname: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z])$/,
  jurisdiction: /^[\x20-\x7E]+$/,
  lastname: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z])$/,
  middlename: /^([a-zA-Z]+.? ?)+[a-zA-Z]*$/,
  password: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/,
  phone: /^(?:\d{1}\s)?\(?(\d{3})\)?[-\s]?(\d{3})[-\s]?(\d{4})(?![\d\s.-])$/,
  url: /[(http(s)?)://(www\.)?a-zA-Z0-9@:%._\+-~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&/\\/=]*)/,
  username: /^\w*\d*$/,
  zip: /^\d{5}(-?\d{4})?$/,
};
