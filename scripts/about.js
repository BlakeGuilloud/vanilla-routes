(function() {
  'use strict';

  const about = {
    init: () => {
      document.getElementById('root').innerHTML = about.render();
    },
    render: () => {
      return (
        `<h2 style="color: red">Hello from about</h2>`
      );
    },
  };

  about.init();

})();
