import Modifier from 'ember-modifier';

export default class ToggleClassModifier extends Modifier {
  modify(element, [], { isOn, className }) {
    if (isOn) {
      element.classList.add(className);
    } else {
      element.classList.remove(className);
    }
  }
}
