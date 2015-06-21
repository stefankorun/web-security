(function() {
  'use strict';

  angular
    .module('webSecurity')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;
    vm.awesomeThings = [];
  }
})();
