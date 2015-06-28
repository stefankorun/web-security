(function() {
  'use strict';

  angular
    .module('webSecurity')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.hashPrefix('!');

    $stateProvider
      .state('main', {
        url: '',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('main.xss', {
        url: '/xss',
        templateUrl: 'app/main/xss/xss.html',
        controller: 'XssViewController',
        controllerAs: 'XssView'
      })
      .state('main.profile', {
        url: '/profile',
        templateUrl: 'app/main/profile/profile.html',
        controller: 'ProfileViewController',
        controllerAs: 'ProfileView'
      });

    //$urlRouterProvider.otherwise('/');
  }

})();
