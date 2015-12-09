'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the frontendApp
 */
app.controller('resultsCtrl', function ($scope,$state,searchFactory) {
  	var self=this;
  	var query="paris"
  	self.search=function(query){
  		searchFactory.searchQuery(query).then(function(data){
  			// console.log("asd")
  			// $state.go('results.list');
  		})
  	}

  	$scope.selectedIndex = 0;

    $scope.$watch('selectedIndex', function(current, old) {
        switch (current) {
            case 0:
                $state.go('results.list');
                break;
            case 1:
                $state.go('results.analytics');
                break;
        }
    });
});
