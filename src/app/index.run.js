(function() {
  'use strict';

  angular
    .module('tableauPoc')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
