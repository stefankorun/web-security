(function () {
  'use strict';

  angular
    .module('webSecurity')
    .controller('XssViewController', XssViewController);

  /** @ngInject */
  function XssViewController($scope) {
    var codeHolder = $('.unfiltered section');

    $scope.$watch('xssText', function (text) {
      codeHolder.html(text);
    });
  }
})();
