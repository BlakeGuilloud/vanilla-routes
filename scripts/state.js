(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    state.init();
  });

  const state = {
    init: () => {
      state.checkRoute();
      state.setWindow();
      injector.init();
    },

    routeOpts: ['#/home', '#/about'],

    checkRoute: () => {
      if (!state.routeOpts.includes(location.hash)) location.hash = '/home';
    },

    setWindow: () => {
      window.onhashchange = () => {
        state.checkRoute();
        state.init();
      };
    },
  };

  const helpers = {
    parseHash: () => {
      return location.hash.slice(2, location.hash.length);
    },
  };

  const injector = {
    init: () => {
      injector.inject();
    },
    buildFilePath: () => {
      const file = helpers.parseHash();

      return `scripts/${file}.js`;
    },
    inject: () => {
      const script = document.createElement('script');

      script.src = injector.buildFilePath();

      return document.getElementById('scripts').append(script);
    },
  };
})();
