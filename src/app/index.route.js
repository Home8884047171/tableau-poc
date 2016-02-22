(function() {
  'use strict';

  angular
    .module('tableauPoc')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'ctrl'
      })
      .state('explore', {
        url: '/explore',
        templateUrl: 'app/explore/explore.html',
        controller: 'ExploreController',
        controllerAs: 'ctrl'
      })
    
    
    ;

    $urlRouterProvider.otherwise('/');
  }

})();
