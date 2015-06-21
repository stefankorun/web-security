/* global malarkey:false, toastr:false, moment:false */
(function() {
  'use strict';

  angular
    .module('webSecurity')
    .constant('toastr', toastr)
    .constant('moment', moment);

})();
