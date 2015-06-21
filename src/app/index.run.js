(function() {
  'use strict';

  angular
    .module('webSecurity')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
