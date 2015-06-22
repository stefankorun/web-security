(function () {
  'use strict';

  angular
    .module('webSecurity')
    .service('MongoService', MongoService);

  /** @ngInject */
  function MongoService($http, $log) {
    var apiKey = '?apiKey=XEc7QHCEd0-ziGzLAgA7bxfHvB2zkgy1';
    var dbName = 'mws-finki';


    this.getDatabases = function () {
      $http.get('https://api.mongolab.com/api/1/databases' + apiKey).then(function (res) {
        $log.log(res);
      });
    };
    this.getCollections = function () {
      $http.get('https://api.mongolab.com/api/1/databases/' + dbName + '/collections' + apiKey).then(function (res) {
        $log.log(res);
      });
    };
    this.saveData = function (key, data) {
      var mongoObj = {
        _id: key,
        data: data
      };

      return $http.post('https://api.mongolab.com/api/1/databases/' + dbName + '/collections/persist' + apiKey, mongoObj);
    };
    this.readData = function (key) {
      return $http.get('https://api.mongolab.com/api/1/databases/' + dbName + '/collections/persist/' + key + apiKey);
    };
  }
})();
