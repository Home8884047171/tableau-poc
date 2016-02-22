(function() {
  'use strict';

  angular
    .module('tableauPoc')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController ($timeout, $q, $log) {
    var self = this;
    self.contents = [{
            Type: 'Chart',
            Title: '',
            Content: ''


        }];
    self.NotebookTitle = '';
    self.addNote = function () {

        self.contents.push({
            Type: 'Note',
            Title: '',
            Content: ''


        });
    }

    self.addChart = function () {

        self.contents.push({
            Type: 'Chart',
            Title: 'Edit chart title',
            Content: '' 


        });
    }
    self.simulateQuery = true;
    self.tickers  = ['AAPL', 'GOOG', 'MSFT'];
    self.querySearch   = function(query) {
      
      var results = query ? self.tickers.filter( createFilterFor(query) ) : self.tickers,
          deferred;
      if (self.simulateQuery) {
        deferred = $q.defer();
        $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
        return deferred.promise;
      } else {
        return results;
      }
      
    };
    self.selectedItemChange = function(){};
    self.searchTextChange   = function(){};
    self.newTicker = function() {alert('Not allowed')};
    
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);
      return function filterFn(ticker) {
        return (angular.lowercase(ticker).indexOf(lowercaseQuery) === 0);
      };
    }

  }
})();
