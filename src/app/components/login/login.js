(function () {
  'use strict';

  angular
    .module('webSecurity')
    .directive('userLogin', UserLogin);

  /** @ngInject */
  function UserLogin(UserService) {
    function link($scope) {
      UserService.fb.checkLogin();
      UserService.gapi.checkLogin();

      $scope.loginFB = function () {
        UserService.fb.openLogin();
      };
      $scope.loginGoogle = function () {
        UserService.gapi.openLogin();
      };
    }

    return {
      restrict: 'EA',
      link: link,
      templateUrl: 'app/components/login/login.html'
    };
  }
})();
