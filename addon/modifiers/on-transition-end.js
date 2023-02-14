import Modifier from 'ember-modifier';
import { registerDestructor } from '@ember/destroyable';

function cleanup(instance) {
  instance.element?.removeEventListener(
    'ontransitionend',
    instance.onTransitionEnd
  );
}

export default class OnTransitionEndModifier extends Modifier {
  constructor(owner, args) {
    super(owner, args);
    registerDestructor(this, cleanup);
  }

  // eslint-disable-next-line no-empty-pattern
  modify(element, [], { onTransitionEnd }) {
    this.onTransitionEnd = onTransitionEnd;
    element.addEventListener('transitionend', onTransitionEnd);
  }
}
