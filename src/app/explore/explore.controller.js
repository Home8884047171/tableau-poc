(function () {
    'use strict';

    angular
        .module('tableauPoc')
        .controller('ExploreController', ExploreController);

        /** @ngInject */
    function ExploreController ($timeout, $q, $log, _, TableauServer) {
        var self = this;
        var vises = [{id:'WorkingRigsHarder/WorkingRigsHarder', title: 'Working Rigs',  category : 'social'}, {id:'CRUDEOILGLUT-US/CRUDEREGIONALSTOCKS', title: 'Crude Stocks',category : 'finance'}, {id:'StormyWeather_0/Weatherlosses', title: 'Weather Losses',category : 'weather'}, {id:'TRULIAAFFORDABILITY/TRULIAAFFORDABILITY',title: 'Trulia Affordability', category : 'finance'}];

        self.vises = [];
        
        self.searchVises = function (keyword) {
          self.vises = _.chain(vises)
                    .groupBy('category')
                    .map(function(value, key) {
                        return {
                            category: key,
                            vises: _.map(value, function(val) {return _.extend(val, { 'url' : TableauServer.getUrlForId(val.id)})})
                        };
                    })
                    .value();
        };
        
        self.searchVises();
    }
})();
