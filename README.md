ember-essential-modifiers
==============================================================================

An essential Ember.js modifiers collection 


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.24 or above
* Ember CLI v3.24 or above
* Node.js v12 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-essential-modifiers
```


Usage
------------------------------------------------------------------------------

- toggle-class:
Toggles className depends on isOn value

```
<div {{toggle-class isOn=true className="active">
  Menu
</div>
```

Result:

```
 <div class="active">Menu</div>
```

- on-transition-end
Handles callback on `transitionend` event

```
<div {{on-transition-end onTransitionEnd=this.handler>
  Menu
</div>
```

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
