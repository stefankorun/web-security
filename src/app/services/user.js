/* global FB:false, gapi:false */
(function () {
  'use strict';

  angular
    .module('webSecurity')
    .service('UserService', UserService)
    .run(function (UserService) {
      /*
      Force angular to load UserService on init (insted of lazy load)
      Required by async sdk request load events (FBload and GAPIload)
       */
    });

  /** @ngInject */
  function UserService($document, $q, $log) {
    var FBAuth;
    var FBDeferred = $q.defer();
    var GAPIAuth;
    var GAPIDeferred = $q.defer();

    $($document).on('FBLoad', function () {
      FBAuth = FB;
      FBDeferred.resolve();
    });
    $($document).on('GAPILoad', function () {
      gapi.auth2.init({
        client_id: '238483914787-kj0in91j4idj3imevh8jr7na105vqvf1.apps.googleusercontent.com'
      });
      GAPIAuth = gapi.auth2.getAuthInstance();
      GAPIDeferred.resolve();
    });

    this.fb = {
      openLogin: function () {
        FBDeferred.promise.then(function () {
          FBAuth.login();
        });
      },
      checkLogin: function () {
        FBDeferred.promise.then(function () {
          FBAuth.getLoginStatus(function (response) {
            $log.log(response);
          });
        });
      }
    };
    this.gapi = {
      openLogin: function () {
        GAPIDeferred.promise.then(function () {
          GAPIAuth.signIn();
        });
      },
      checkLogin: function () {
        GAPIDeferred.promise.then(function () {
          $log.log(GAPIAuth.isSignedIn.get());
        });
      }
    };
  }
})();
