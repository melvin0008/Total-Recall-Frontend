'use strict';

/**
 * @ngdoc overview
 * @name frontendApp
 * @description
 * # frontendApp
 *
 * Main module of the application.
 */
angular
  .module('TotalRecall', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'TotalRecall'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('search', {
        url:'/search',
        templateUrl: 'views/search.html',
      })
      $urlRouterProvider.otherwise("/search");
  })
.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);
