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
  	var query="paris"
  	self.search=function(query){
  		searchFactory.searchQuery(query).then(function(data){
  			// console.log("asd")
  			// $state.go('results.list');
  		})
  	}
});
