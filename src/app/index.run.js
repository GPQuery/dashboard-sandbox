(function() {
  'use strict';

  angular
    .module('gpquery')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
