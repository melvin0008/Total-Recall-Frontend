'use strict';

/**
 * @ngdoc overview
 * @name frontendApp
 * @description
 * # frontendApp
 *
 * Main module of the application.
 */
var app = angular
  .module('TotalRecall', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'angularUtils.directives.dirPagination',
    'ngMap',
    'angular-jqcloud',
    'materialDatePicker'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('search', {
        url:'/search',
        templateUrl: 'views/search.html',
      })
      .state('results', {
        abstract: true,
        params:{query:null},
        controller:"ResultsCtrl",
        templateUrl: 'views/results.html'
      })
      .state('results.list', {
          // loaded into ui-view of parent's template
          url:'/results',
          params:{query:null},
          controller:"ResultsCtrl",
           parent: 'results',
          templateUrl: 'views/results.list.html'
      })
       .state('results.wordCloud', {
          // loaded into ui-view of parent's template
          url:'/results',
          params:{query:null},
          controller:"WordcloudCtrl",
           parent: 'results',
          templateUrl: 'views/results.wordCloud.html'
      })
      .state('results.analytics', {
          // loaded into ui-view of parent's template
          url:'/resultsanalytics',
          params:{query:null},
          controller:"ResultsCtrl",
           parent: 'results',
          templateUrl: 'views/results.analytics.html'
      })
      $urlRouterProvider.otherwise("/results");
  })
.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
])
.config(['$mdIconProvider', function($mdIconProvider) {
    $mdIconProvider
      .iconSet('social', 'img/icons/sets/social-icons.svg', 24)
      .defaultIconSet('img/icons/sets/core-icons.svg', 24);
  }])
.config(function(paginationTemplateProvider) {
    paginationTemplateProvider.setPath('views/template.paginate.html');
});;
