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
    });
    MongoService.readData('csrfText').success(function (res) {
      $scope.csrfText = res.data;
    });


    $scope.$watch('xssText', function (text) {
      codeHolder.html(text);
    });

    $scope.saveText = function (type, string) {
      MongoService.saveData(type, string)
        .success(function () {
          toastr.success('Saved ' + type + ' text');
        })
        .error(function () {
          toastr.error('Error');
        });
    };

  }
})();
