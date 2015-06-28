(function () {
  'use strict';

  angular
    .module('webSecurity')
    .controller('ProfileViewController', ProfileViewController);

  /** @ngInject */
  function ProfileViewController(UserService) {
    var ctrl = this;
    ctrl.profiles = {
      normal: {},
      facebook: {
        logged: false,
        profile: {}
      },
      gapi: {
        logged: false,
        profile: {}
      }
    };

    ctrl.reloadProfiles = function () {
      UserService.fb.checkLogin().then(function(status) {
        ctrl.profiles.facebook.logged = status;
        if (status) {
          UserService.fb.getProfile().then(function (res) {
            ctrl.profiles.facebook.profile = res;
          });
        }
      });
      UserService.gapi.checkLogin().then(function(status) {
        ctrl.profiles.gapi.logged = status;
        if (status) {
          UserService.gapi.getProfile().then(function (res) {
            ctrl.profiles.gapi.profile = res;
          });
        }
      });
    };
    ctrl.reloadProfiles();
  }
})();
