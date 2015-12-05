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
    // Service logic

    // Public API here
    return {
      searchQuery: function (searchQuery) {
          var deferred =$q.defer();
          $http({
            method:'GET',
            url:apiUrl+'search/'+searchQuery
          }).success(function(data){
            deferred.resolve(data)
          }).error(function(){
            deferred.reject("There is an error")
          })
          return deferred.promise
      }
    };
  });
