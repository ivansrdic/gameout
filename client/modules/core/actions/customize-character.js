import Validation, {Utils} from './validation-utility';

const stateKey = "client.modules.core.actions.customize-character";

export default {
  stateKey() {
    return stateKey;
  },

  clearErrors({LocalState}) {
    return LocalState.set(stateKey, null);
  }
}