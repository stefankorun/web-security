(function () {
  'use strict';

  angular
    .module('webSecurity')
    .directive('userLogin', UserLogin);

  /** @ngInject */
  function UserLogin($document, $log, AuthService) {
    function link($scope) {
      AuthService.fb.checkLogin();
      AuthService.gapi.checkLogin();

      $scope.loginFB = function () {
        AuthService.fb.openLogin();
      };
      $scope.loginGoogle = function () {
        AuthService.gapi.openLogin();
      };
    }

    return {
      restrict: 'EA',
      link: link,
      templateUrl: 'app/components/login/login.html'
    };
  }
})();
