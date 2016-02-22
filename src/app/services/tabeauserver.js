(function() {
  'use strict';

  angular
    .module('tableauPoc')
    .factory('TableauServer', TableauServer);

  /** @ngInject */
  function TableauServer ($timeout, $q, $log) {
    var self = this;
    
    function getUrlForId(id) {
        return 'https://public.tableau.com/views/' + id;
        
    }  
      
    return {
        getUrlForId : getUrlForId
        
    }  
    

  }
})();
