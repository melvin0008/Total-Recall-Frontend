'use strict';
/**
 * @ngdoc service
 * @name frontendApp.searchFactory
 * @description
 * # searchFactory
 * Factory in the frontendApp.
 */
angular.module('TotalRecall')
  .factory('searchFactory', function ($http,$q,apiUrl) {
    // Public API here
    return {
      searchQuery: function (searchQuery,pageNumber) {
          var deferred =$q.defer();
          $http({
            method:'GET',
            url:apiUrl+'search?q='+searchQuery+"&row="+pageNumber
          }).success(function(data){
            deferred.resolve(data)
          }).error(function(){
            deferred.reject("There is an error")
          })
          return deferred.promise
      },
      getTrending: function () {
          var deferred =$q.defer();
          $http({
            method:'GET',
            url:apiUrl+'trendingTopics'
          }).success(function(data){
            deferred.resolve(data)
          }).error(function(){
            deferred.reject("There is an error")
          })
          return deferred.promise
      }
    };
  });
