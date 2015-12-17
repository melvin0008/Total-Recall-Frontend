'use strict';

/**
 * @ngdoc function
 * @name TotalRecall.controller:WordcloudCtrl
 * @description
 * # WordcloudCtrl
 * Controller of the TotalRecall
 */
angular.module('TotalRecall')
  .controller('WordcloudCtrl', function ($scope,searchFactory) {
 	searchFactory.getCloud().then(function(data){
        $scope.trendingcloud=data.trending
     });
  });
