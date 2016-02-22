(function () {
    'use strict';

angular.module('tableauPoc')
.directive('tableauChart', TableauChart);


/** @ngInject */           
function TableauChart ($parse, $log) {
    return {
        restrict: "E",
        scope: {
          url: '=url'
        },
        link: function (scope, element, attrs, controller) {
            //var url = "https://public.tableau.com/views/RegionalSampleWorkbook/Storms",
            var  options = {
                    hideTabs: true,
                    hideToolbar: true,
                    toolBarPosition: tableau.ToolbarPosition.TOP,
                    onFirstInteractive: function (vix) {
                        $log.info(viz);
                    }
                };
            var viz = new tableau.Viz(element[0], scope.url, options);
            viz.addEventListener(tableau.TableauEventName.FILTER_CHANGE,
                function (e) {
                    $log.info(e);
                }
            );
            scope.$on('$destroy', function() {
                viz.dispose();
                
            });
            
        }
    };
}

})();