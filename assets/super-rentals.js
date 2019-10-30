'use strict';



;define("super-rentals/app", ["exports", "super-rentals/resolver", "ember-load-initializers", "super-rentals/config/environment"], function (_exports, _resolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
  var _default = App;
  _exports.default = _default;
});
;define("super-rentals/components/rental-listing", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({});

  _exports.default = _default;
});
;define("super-rentals/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("super-rentals/helpers/app-version", ["exports", "super-rentals/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("super-rentals/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("super-rentals/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("super-rentals/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "super-rentals/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("super-rentals/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("super-rentals/initializers/ember-data", ["exports", "ember-data/setup-container", "ember-data"], function (_exports, _setupContainer, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    ```app/services/store.js
    import DS from 'ember-data';
  
    export default DS.Store.extend({
      adapter: 'custom'
    });
    ```
  
    ```app/controllers/posts.js
    import { Controller } from '@ember/controller';
  
    export default Controller.extend({
      // ...
    });
  
    When the application is initialized, `ApplicationStore` will automatically be
    instantiated, and the instance of `PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("super-rentals/initializers/export-application-global", ["exports", "super-rentals/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("super-rentals/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
  _exports.default = _default;
});
;define("super-rentals/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _emberResolver.default;
  _exports.default = _default;
});
;define("super-rentals/router", ["exports", "super-rentals/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });
  Router.map(function () {
    this.route('about');
    this.route('contact');
    this.route('rentals');
  });
  var _default = Router;
  _exports.default = _default;
});
;define("super-rentals/routes/about", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("super-rentals/routes/contact", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("super-rentals/routes/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    redirect() {
      this.transitionTo('rentals');
    }

  }); //PREFIX dc: <http://purl.org/dc/elements/1.1/>
  //PREFIX dct: <http://purl.org/dc/terms/>
  //PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
  //
  //SELECT ?cho ?title ?type WHERE {
  //  VALUES ?type { "Foto" "foto" "Negatief" "negatief" "Glasnegatief" "glasnegatief" "Dia" "dia" "Kleurendia" "kleurendia" "Lichtbeeld" "lichtbeeld"}
  //  ?cho dc:type ?type ;
  //        dc:title ?title .
  //   FILTER langMatches(lang(?title), "ned")
  //   FILTER (REGEX (?title, "tatoeage"))
  //
  //}


  _exports.default = _default;
});
;define("super-rentals/routes/rentals", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const url = "https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-10/sparql";
  const query = "\nPREFIX edm: <http://www.europeana.eu/schemas/edm/>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX dct: <http://purl.org/dc/terms/>\nPREFIX skos: <http://www.w3.org/2004/02/skos/core#>\nSELECT ?cho ?title ?type\nWHERE {\n VALUES ?type { \"Foto\" \"foto\" \"Negatief\" \"negatief\" \"Glasnegatief\" \"glasnegatief\" \"Dia\" \"dia\" \"Kleurendia\" \"kleurendia\" \"Lichtbeeld\" \"lichtbeeld\"}\n ?cho edm:isRelatedTo <https://hdl.handle.net/20.500.11840/termmaster21439> ;\n      dc:title ?title ;\n      dc:type ?type ;\n    edm:isShownBy ?picture .\n}\nLIMIT 40\n"; //categorie = "tatoeage"
  //students.filter(function(name){ return filterFunctie(name)} )
  //
  //function filterFunctie(naam){
  //    return naam.includes(categorie)
  //}

  var _default = Ember.Route.extend({
    model() {
      // model() is eigenlijk een functie: model: function()
      return fetch(url + "?query=" + encodeURIComponent(query) + "&format=json").then(res => res.json()) // res is een response die hier wordt omgezet in Jason
      .then(json => {
        console.log(json.results.bindings[0]);
        return json.results.bindings; // response wordt weergegeven in de console.log (alleen de bindings-map)
      });
    }

  });

  _exports.default = _default;
});
;define("super-rentals/templates/about", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Bk1RRUku",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\",true],[10,\"class\",\"jumbo\"],[8],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"right tomster\"],[8],[9],[0,\"\\n  \"],[7,\"h3\",true],[8],[0,\"Een museum over mensen\"],[9],[0,\"\\n  \"],[7,\"p\",true],[8],[0,\"\\n    Museum Volkenkunde staat, als een van de oudste volkenkundige musea ter wereld, midden in de actualiteit.\\n    Een wandeling door het museum opent je blik op de wereld.\\n  \"],[9],[0,\"\\n\\n  \"],[7,\"p\",true],[8],[0,\"Zo zijn er veel verschillende culturen waarbij tatoeages een belangrijke rol speelden: het diende als een brandmerk onder slaven en was het erg populair onder zeelieden.\\n  Tegenwoordig zijn tatoeages nog steeds erg populair als lichaamsversiering.\\n  \"],[9],[0,\"\\n\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "super-rentals/templates/about.hbs"
    }
  });

  _exports.default = _default;
});
;define("super-rentals/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "w8pn+Uqg",
    "block": "{\"symbols\":[],\"statements\":[[0,\" \"],[7,\"div\",true],[10,\"class\",\"container\"],[8],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"menu\"],[8],[0,\"\\n\"],[4,\"link-to\",null,[[\"route\"],[\"index\"]],{\"statements\":[[0,\"      \"],[7,\"h1\",true],[8],[0,\"\\n        \"],[7,\"em\",true],[8],[0,\"Zoek inspiratie\"],[9],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[7,\"div\",true],[10,\"class\",\"links\"],[8],[0,\"\\n\"],[4,\"link-to\",null,[[\"class\",\"route\"],[\"menu-about\",\"about\"]],{\"statements\":[[0,\"        Over ons\\n\"]],\"parameters\":[]},null],[4,\"link-to\",null,[[\"class\",\"route\"],[\"menu-contact\",\"contact\"]],{\"statements\":[[0,\"        Contact\\n\"]],\"parameters\":[]},null],[0,\"    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"body\"],[8],[0,\"\\n    \"],[1,[22,\"outlet\"],false],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\\n\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "super-rentals/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;define("super-rentals/templates/components/rental-listing", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "iW8/tCdG",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[14,1],[0,\"\\n\"],[7,\"article\",true],[10,\"class\",\"listing\"],[8],[0,\"\\n  \"],[7,\"img\",true],[11,\"src\",[23,0,[\"rental\",\"image\"]]],[10,\"alt\",\"\"],[8],[9],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"details\"],[8],[0,\"\\n    \"],[7,\"h3\",true],[8],[1,[23,0,[\"rental\",\"title\"]],false],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"detail owner\"],[8],[0,\"\\n      \"],[7,\"span\",true],[8],[0,\"Owner:\"],[9],[0,\" \"],[1,[23,0,[\"rental\",\"owner\"]],false],[0,\"\\n    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"detail type\"],[8],[0,\"\\n      \"],[7,\"span\",true],[8],[0,\"Type:\"],[9],[0,\" \"],[1,[23,0,[\"rental\",\"category\"]],false],[0,\"\\n    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"detail location\"],[8],[0,\"\\n      \"],[7,\"span\",true],[8],[0,\"Location:\"],[9],[0,\" \"],[1,[23,0,[\"rental\",\"city\"]],false],[0,\"\\n    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"detail bedrooms\"],[8],[0,\"\\n      \"],[7,\"span\",true],[8],[0,\"Number of bedrooms:\"],[9],[0,\" \"],[1,[23,0,[\"rental\",\"bedrooms\"]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "super-rentals/templates/components/rental-listing.hbs"
    }
  });

  _exports.default = _default;
});
;define("super-rentals/templates/contact", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "2DkYqsp/",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\",true],[10,\"class\",\"jumbo\"],[8],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"right tomster\"],[8],[9],[0,\"\\n  \"],[7,\"h3\",true],[8],[0,\"Adres\"],[9],[0,\"\\n  \"],[7,\"address\",true],[8],[0,\"\\n    Museum Volkenkunde\\n    \"],[7,\"p\",true],[8],[0,\"\\n    Steenstraat 1\\n    2312 BS Leiden\\n    \"],[9],[0,\"\\n\"],[2,\"    <a href=\\\"mailto:superrentalsrep@emberjs.com\\\">superrentalsrep@emberjs.com</a>\"],[0,\"\\n  \"],[9],[0,\"\\n    \"],[7,\"h3\",true],[8],[0,\"Openingstijden\"],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"Het museum is van dinsdag t/m zondag open tussen 10.00 - 17.00 uur\"],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\" Gesloten op maandagen, 1 januari (nieuwjaarsdag), 27 april (Koningsdag), 3 oktober (Leids ontzet) en 25 december (1e kerstdag).\"],[9],[0,\"\\n    \"],[7,\"h3\",true],[8],[0,\"Entreeprijzen\"],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"Volwassene (vanaf 19 jaar) - €15,00 \"],[7,\"br\",true],[8],[9],[0,\"\\n    Jeugd (4 t/m 18 jaar) - € 6,00 \"],[7,\"br\",true],[8],[9],[0,\"\\n    Kinderen (t/m 3 jaar) - Gratis \"],[7,\"br\",true],[8],[9],[0,\"\\n    CJP* - € 9,00 \"],[7,\"br\",true],[8],[9],[0,\"\\n    Groepstarief (vanaf 10 volbetalende personen) - 10% korting \"],[7,\"br\",true],[8],[9],[0,\"\\n    Studenten* - € 10,00 \"],[7,\"br\",true],[8],[9],[0,\"\\n    Museumkaart* - Gratis \"],[7,\"br\",true],[8],[9],[0,\"\\n    Bankgiro Loterij VIP-KAART* - Gratis \"],[7,\"br\",true],[8],[9],[0,\"\\n    ICOM, Vereniging Rembrandt* - Gratis \"],[7,\"br\",true],[8],[9],[0,\"\\n    Vrienden Tropenmuseum, Afrika Museum, Museum Volkenkunde* - Gratis \"],[7,\"br\",true],[8],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\" \"],[7,\"i\",true],[8],[0,\"* Korting of gratis entree alleen op vertoon van de desbetreffende kortingskaart. Deze kaart moet fysiek getoond worden. Digitale varianten worden niet geaccepteerd.\"],[9],[9],[0,\"\\n\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "super-rentals/templates/contact.hbs"
    }
  });

  _exports.default = _default;
});
;define("super-rentals/templates/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "mMINacTq",
    "block": "{\"symbols\":[],\"statements\":[[1,[22,\"outlet\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "super-rentals/templates/index.hbs"
    }
  });

  _exports.default = _default;
});
;define("super-rentals/templates/rentals", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "R6TEIxmh",
    "block": "{\"symbols\":[\"rental\"],\"statements\":[[7,\"div\",true],[10,\"class\",\"welcome_page\"],[8],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"right tomster\"],[8],[9],[0,\"\\n  \"],[7,\"h3\",true],[8],[0,\"Op zoek naar inspiratie voor een unieke tatoeage?\"],[9],[0,\"\\n  \"],[7,\"p\",true],[8],[0,\"Open je blik op tatoeages en bekijk foto's van getatoeëerde mensen van verschillende culturen! \"],[9],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[2,\"\\n{{#each this.model as |rentalUnit|}}\\n  <RentalListing @rental={{rentalUnit}} />\\n{{/each}}\"],[0,\"\\n\\n\\n\"],[4,\"each\",[[23,0,[\"model\"]]],null,{\"statements\":[[0,\"  \"],[7,\"article\",true],[10,\"class\",\"listing\"],[8],[0,\"\\n    \"],[7,\"h3\",true],[8],[1,[23,1,[\"title\",\"value\"]],false],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"detail owner\"],[8],[0,\"\\n      \"],[7,\"span\",true],[8],[0,\"Uri:\"],[9],[0,\" \"],[1,[23,1,[\"cho\",\"value\"]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "super-rentals/templates/rentals.hbs"
    }
  });

  _exports.default = _default;
});
;

;define('super-rentals/config/environment', [], function() {
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

;
          if (!runningTests) {
            require("super-rentals/app")["default"].create({"name":"super-rentals","version":"0.0.0"});
          }
        
//# sourceMappingURL=super-rentals.map
