import Modifier from 'ember-modifier';

export default class ToggleClassModifier extends Modifier {
  // eslint-disable-next-line no-empty-pattern
  modify(element, [], { isOn, className }) {
    if (isOn) {
      element.classList.add(className);
    } else {
      element.classList.remove(className);
    }
  }
}
