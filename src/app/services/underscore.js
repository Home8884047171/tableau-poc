(function() {
  'use strict';

  angular
    .module('tableauPoc')
    .factory('_', UnderscoreService);

  /** @ngInject */
  function UnderscoreService($window) {
        return $window._; 
  };

})();