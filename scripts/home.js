(function() {
  'use strict';

  const home = {
    init: () => {
      document.getElementById('root').innerHTML = home.render();
    },
    render: () => {
      return (
        `<h2 style="color: blue">Hello from home</h2>`
      );
    },
  };

  home.init();

})();
