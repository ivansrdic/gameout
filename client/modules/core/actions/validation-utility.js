export default class Validation{
  constructor(LocalState, key, validationObject) {
    this.LocalState = LocalState;
    this.key = key;
    this.validationObject = validationObject;
  }

  getErrors() {
    const errors = this.LocalState.get(this.key);
    return errors ? errors : {};
  }

  setError(status, message) {
    let errors = this.getErrors(this.key);
    errors[this.validationObject] = {status, message};
    this.LocalState.set(this.key, errors);
  }
  
  success() {
    this.setError("success", "");
  }

  static isNumeric(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
  }

  /**
   * Note: This will defend against injection attacks as well.
   */
  static isPositiveInteger(value) {
    return !Validation.isNumeric(value) || !Number.isInteger(parseFloat(value)) || !(value > 0);
  }

  static isEmpty(value) {
    return !value;
  }

}