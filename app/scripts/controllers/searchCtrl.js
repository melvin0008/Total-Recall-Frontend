'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the frontendApp
 */
angular.module('TotalRecall')
  .controller('SearchCtrl', function ($scope,searchFactory) {
  	var self=this;
  	self.search=function(query){
  		searchFactory.searchQuery(query).then(function(data){
  			console.log(data)
  		})
  	}
});
