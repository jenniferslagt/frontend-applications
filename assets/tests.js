'use strict';

define("super-rentals/tests/acceptance/list-rentals-test", ["qunit", "@ember/test-helpers", "ember-qunit"], function (_qunit, _testHelpers, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Acceptance | list rentals', function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);
    (0, _qunit.test)('visiting /', async function (assert) {
      await (0, _testHelpers.visit)('/');
      assert.equal((0, _testHelpers.currentURL)(), '/');
    });
  });
});
define("super-rentals/tests/integration/components/rental-listing-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | rental-listing', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <RentalListing />
      */
      {
        id: "9K6fWlp5",
        block: "{\"symbols\":[],\"statements\":[[5,\"rental-listing\",[],[[],[]]]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <RentalListing>
              template block text
            </RentalListing>
          
      */
      {
        id: "yafcVtNT",
        block: "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"rental-listing\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("super-rentals/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('components/rental-listing.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/rental-listing.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/about.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/about.js should pass ESLint\n\n');
  });
  QUnit.test('routes/contact.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/contact.js should pass ESLint\n\n');
  });
  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });
  QUnit.test('routes/rentals.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/rentals.js should pass ESLint\n\n32:9 - Unexpected console statement. (no-console)');
  });
});
define("super-rentals/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('super-rentals/templates/about.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'super-rentals/templates/about.hbs should pass TemplateLint.\n\nsuper-rentals/templates/about.hbs\n  4:4  error  Incorrect indentation for `<p>` beginning at L4:C4. Expected `<p>` to be at an indentation of 2 but was found at 4.  block-indentation\n  6:4  error  Incorrect indentation for `<img>` beginning at L6:C4. Expected `<img>` to be at an indentation of 2 but was found at 4.  block-indentation\n  4:7  error  Incorrect indentation for `Zo zijn er veel verschillende culturen waarbij tatoeages een belangrijke rol speelden: het diende als een brandmerk onder slaven en was het erg populair onder zeelieden. Tegenwoordig zijn tatoeages nog steeds erg populair als lichaamsversiering.\n    ` beginning at L4:C7. Expected `Zo zijn er veel verschillende culturen waarbij tatoeages een belangrijke rol speelden: het diende als een brandmerk onder slaven en was het erg populair onder zeelieden. Tegenwoordig zijn tatoeages nog steeds erg populair als lichaamsversiering.\n    ` to be at an indentation of 6 but was found at 7.  block-indentation\n');
  });
  QUnit.test('super-rentals/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'super-rentals/templates/application.hbs should pass TemplateLint.\n\nsuper-rentals/templates/application.hbs\n  1:1  error  Incorrect indentation for `<div>` beginning at L1:C1. Expected `<div>` to be at an indentation of 0, but was found at 1.  block-indentation\n  20:6  error  Incorrect indentation for `div` beginning at L1:C1. Expected `</div>` ending at L20:C6 to be at an indentation of 1 but was found at 0.  block-indentation\n  2:2  error  Incorrect indentation for `<div>` beginning at L2:C2. Expected `<div>` to be at an indentation of 3 but was found at 2.  block-indentation\n  17:2  error  Incorrect indentation for `<div>` beginning at L17:C2. Expected `<div>` to be at an indentation of 3 but was found at 2.  block-indentation\n  16:12  error  Incorrect indentation for `div` beginning at L2:C2. Expected `</div>` ending at L16:C12 to be at an indentation of 2 but was found at 6.  block-indentation\n');
  });
  QUnit.test('super-rentals/templates/components/rental-listing.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'super-rentals/templates/components/rental-listing.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('super-rentals/templates/contact.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'super-rentals/templates/contact.hbs should pass TemplateLint.\n\nsuper-rentals/templates/contact.hbs\n  26:10  error  Incorrect indentation for `div` beginning at L1:C0. Expected `</div>` ending at L26:C10 to be at an indentation of 0 but was found at 4.  block-indentation\n  10:4  error  Incorrect indentation for `<h3>` beginning at L10:C4. Expected `<h3>` to be at an indentation of 2 but was found at 4.  block-indentation\n  11:4  error  Incorrect indentation for `<p>` beginning at L11:C4. Expected `<p>` to be at an indentation of 2 but was found at 4.  block-indentation\n  12:4  error  Incorrect indentation for `<p>` beginning at L12:C4. Expected `<p>` to be at an indentation of 2 but was found at 4.  block-indentation\n  13:4  error  Incorrect indentation for `<h3>` beginning at L13:C4. Expected `<h3>` to be at an indentation of 2 but was found at 4.  block-indentation\n  14:4  error  Incorrect indentation for `<p>` beginning at L14:C4. Expected `<p>` to be at an indentation of 2 but was found at 4.  block-indentation\n  25:4  error  Incorrect indentation for `<p>` beginning at L25:C4. Expected `<p>` to be at an indentation of 2 but was found at 4.  block-indentation\n  5:7  error  Incorrect indentation for `\n    Steenstraat 1\n    2312 BS Leiden\n    ` beginning at L5:C7. Expected `\n    Steenstraat 1\n    2312 BS Leiden\n    ` to be at an indentation of 6 but was found at 4.  block-indentation\n  14:7  error  Incorrect indentation for `Volwassene (vanaf 19 jaar) - \u20AC15,00 ` beginning at L14:C7. Expected `Volwassene (vanaf 19 jaar) - \u20AC15,00 ` to be at an indentation of 6 but was found at 7.  block-indentation\n');
  });
  QUnit.test('super-rentals/templates/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'super-rentals/templates/index.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('super-rentals/templates/rentals.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'super-rentals/templates/rentals.hbs should pass TemplateLint.\n\nsuper-rentals/templates/rentals.hbs\n  20:16  error  Incorrect indentation for `div` beginning at L1:C0. Expected `</div>` ending at L20:C16 to be at an indentation of 0 but was found at 10.  block-indentation\n  6:0  error  Incorrect indentation for `<section>` beginning at L6:C0. Expected `<section>` to be at an indentation of 2 but was found at 0.  block-indentation\n  7:0  error  Incorrect indentation for `<form>` beginning at L7:C0. Expected `<form>` to be at an indentation of 2 but was found at 0.  block-indentation\n  19:8  error  Incorrect indentation for `<input>` beginning at L19:C8. Expected `<input>` to be at an indentation of 2 but was found at 8.  block-indentation\n  8:4  error  Incorrect indentation for `<p>` beginning at L8:C4. Expected `<p>` to be at an indentation of 2 but was found at 4.  block-indentation\n  9:8  error  Incorrect indentation for `<input>` beginning at L9:C8. Expected `<input>` to be at an indentation of 2 but was found at 8.  block-indentation\n  10:8  error  Incorrect indentation for `<label>` beginning at L10:C8. Expected `<label>` to be at an indentation of 2 but was found at 8.  block-indentation\n  11:8  error  Incorrect indentation for `<input>` beginning at L11:C8. Expected `<input>` to be at an indentation of 2 but was found at 8.  block-indentation\n  12:8  error  Incorrect indentation for `<label>` beginning at L12:C8. Expected `<label>` to be at an indentation of 2 but was found at 8.  block-indentation\n  13:8  error  Incorrect indentation for `<input>` beginning at L13:C8. Expected `<input>` to be at an indentation of 2 but was found at 8.  block-indentation\n  14:8  error  Incorrect indentation for `<label>` beginning at L14:C8. Expected `<label>` to be at an indentation of 2 but was found at 8.  block-indentation\n  15:8  error  Incorrect indentation for `<input>` beginning at L15:C8. Expected `<input>` to be at an indentation of 2 but was found at 8.  block-indentation\n  16:8  error  Incorrect indentation for `<label>` beginning at L16:C8. Expected `<label>` to be at an indentation of 2 but was found at 8.  block-indentation\n  43:11  error  Incorrect indentation for `each` beginning at L34:C0. Expected `{{/each}}` ending at L43:C11 to be at an indentation of 0 but was found at 2.  block-indentation\n  34:34  error  Incorrect indentation for `<!-- er worden bepaalde items gerendert uit rental (value) -->` beginning at L34:C34. Expected `<!-- er worden bepaalde items gerendert uit rental (value) -->` to be at an indentation of 2 but was found at 34.  block-indentation\n  36:3  error  Incorrect indentation for `<img>` beginning at L36:C3. Expected `<img>` to be at an indentation of 4 but was found at 3.  block-indentation\n  37:3  error  Incorrect indentation for `<br>` beginning at L37:C3. Expected `<br>` to be at an indentation of 4 but was found at 3.  block-indentation\n  22:0  error  HTML comment detected  no-html-comments\n  28:0  error  HTML comment detected  no-html-comments\n  34:34  error  HTML comment detected  no-html-comments\n');
  });
});
define("super-rentals/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('acceptance/list-rentals-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/list-rentals-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/rental-listing-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/rental-listing-test.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/about-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/about-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/contact-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/contact-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/rentals-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/rentals-test.js should pass ESLint\n\n');
  });
});
define("super-rentals/tests/test-helper", ["super-rentals/app", "super-rentals/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("super-rentals/tests/unit/routes/about-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | about', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:about');
      assert.ok(route);
    });
  });
});
define("super-rentals/tests/unit/routes/contact-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | contact', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:contact');
      assert.ok(route);
    });
  });
});
define("super-rentals/tests/unit/routes/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define("super-rentals/tests/unit/routes/rentals-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | rentals', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:rentals');
      assert.ok(route);
    });
  });
});
define('super-rentals/config/environment', [], function() {
  var prefix = 'super-rentals';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('super-rentals/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
