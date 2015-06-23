(function() {
  'use strict';

  angular
    .module('webSecurity')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $state) {
    //$state.go('main.xss');
    $log.debug('runBlock end');
  }

})();
