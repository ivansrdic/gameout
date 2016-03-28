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

  isNumeric(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
  }

  isEmpty(value) {
    return !value;
  }

}