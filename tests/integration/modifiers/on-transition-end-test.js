import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Modifier | on-transition-end', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('isOpen', true);
    assert.timeout(1500);
    let done = assert.async(2);

    this.set('transitionendHandler', () => {
      assert.dom('.square').isNotVisible();
      done();
    });

    await render(hbs`
      <style>
        .square { width: 0; height: 0; background-color: red; transition: all 1s ease; }
        .square.open { width: 250px; height: 250px; }
      </style>
      <div
        class={{if this.isOpen 'square open' 'square'}}
        {{on-transition-end onTransitionEnd=this.transitionendHandler}}
      >
      </div>
    `);
    assert.dom('.square').hasClass('open');
    assert.dom('.square').isVisible();
    this.set('isOpen', false);
    assert.dom('.square').doesNotHaveClass('open');
    assert.dom('.square').isVisible();
  });
});
