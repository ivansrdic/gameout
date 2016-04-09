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
    setTimeout(function() {
      let errors = this.getErrors(this.key);
      errors[this.validationObject] = {status, message};
      this.LocalState.set(this.key, errors);
    }.bind(this), 0);
  }

  error(message) {
    this.setMessage("error", message);
  }

  warning(message) {
    this.setMessage("warning", message);
  }

  success(message = "") {
    this.setMessage("success", message);
  }
}

const Utils = {
  REQUIRED: "This is a required input.",
  NUMERIC: "This should be a number.",
  POSITIVE_NUMBER: "This must be a positive integer number.",
  SERVER_ERROR: "There was a hiccup in communication. For security reasons, please enter your input again.",
  IMAGE_OR_VIDEO: "This should be a youtube or .mp4 video or a .jpg, .jpeg, .png, .gif image.",

  isNumeric(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
  },

  /**
   * Note: This will defend against injection attacks as well.
   */
  isPositiveInteger(value) {
    return !this.isNumeric(value) || !Number.isInteger(parseFloat(value)) || !(value > 0);
  },

  isImageOrVideo(url) {
    url = url.toLowerCase();
    if(url.match(/\.(jpeg|jpg|gif|png)$/) != null) return true; //jpeg jpg gif png image
    else if(url.match(/\.(mp4)$/) != null) return true;              //mp4 video
    else if(url.match(/^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/) != null) return true;
  },


  isEmpty(value) {
    return !value;
  },
  hasErrors(errors) {
    for (const error in errors) {
      if (errors.hasOwnProperty(error) && errors[error].status === "error" && error !== 'globalMessage') return true;
    }
    return false;
  },
  serverError() {
    return {serverError: "Server error occurred!"};
  }
};

export {Utils};