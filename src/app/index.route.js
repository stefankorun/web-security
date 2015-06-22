(function() {
  'use strict';

  angular
    .module('webSecurity')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('xss', {
        url: '/xss',
        templateUrl: 'app/main/xss/xss.html',
        controller: 'XssViewController',
        controllerAs: 'XssView'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
