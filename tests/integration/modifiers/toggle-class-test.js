import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Modifier | toggle-class', function (hooks) {
  setupRenderingTest(hooks);

  test('it toggles class', async function (assert) {
    this.set('enabled', false);
    await render(
      hbs`<div {{toggle-class isOn=this.enabled className="active"}}></div>`
    );
    assert.dom('div').doesNotHaveClass('active');

    this.set('enabled', true);
    assert.dom('div').hasClass('active');
  });
});
