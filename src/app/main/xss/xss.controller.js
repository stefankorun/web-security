(function () {
  'use strict';

  angular
    .module('webSecurity')
    .controller('XssViewController', XssViewController);

  /** @ngInject */
  function XssViewController($scope, MongoService, toastr) {
    var codeHolder = $('.unfiltered section');
    MongoService.readData('xssText').success(function (res) {
      $scope.xssText = res.data;
      toastr.info('xssText recieved from server');
    });


    $scope.$watch('xssText', function (text) {
      codeHolder.html(text);
    });

    $scope.saveXssText = function (string) {
      MongoService.saveData('xssText', string)
        .success(function () {
          toastr.success('Saved');
        })
        .error(function () {
          toastr.error('Error');
        });
    };


  }
})();
