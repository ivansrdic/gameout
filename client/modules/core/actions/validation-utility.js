export default class Validation {
  constructor(LocalState, key, validationObject) {
    this.LocalState = LocalState;
    this.key = key;
    this.validationObject = validationObject;
  }

  getErrors() {
    const errors = this.LocalState.get(this.key);
    return errors ? errors : {};
  }

  setMessage(status, message) {
    let errors = this.getErrors(this.key);
    errors[this.validationObject] = {status, message};
    this.LocalState.set(this.key, errors);
  }

  error(message) {
    this.setMessage("error", message);
  }

  warning(message) {
    this.setMessage("warning", message);
  }

  success() {
    this.setMessage("success", "");
  }
}


const Utils = {
  REQUIRED: "This is a required input.",
  NUMERIC: "This should be a number.",
  POSITIVE_NUMBER: "This must be a positive integer number",

  isNumeric(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
  },

  /**
   * Note: This will defend against injection attacks as well.
   */
  isPositiveInteger(value) {
    return !this.isNumeric(value) || !Number.isInteger(parseFloat(value)) || !(value > 0);
  },
  isEmpty(value) {
    return !value;
  },
  hasErrors(errors) {
    for (const error in errors) {
      if (errors.hasOwnProperty(error) && errors[error].status === "error") return true;
    }
    return false;
  }
};

export {Utils};