'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the frontendApp
 */
angular.module('TotalRecall')
  .controller('SearchCtrl', function ($scope,$state,searchFactory) {
  	var self=this;
  	self.search=function(query){
  		$state.go('results.list',{query:query})
  	}
});
