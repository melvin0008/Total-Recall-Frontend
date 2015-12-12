"use strict";var app=angular.module("TotalRecall",["ngAnimate","ngCookies","ngMessages","ngResource","ui.router","ngSanitize","ngTouch","ngMaterial","angularUtils.directives.dirPagination","ngMap"]).config(["$stateProvider","$urlRouterProvider",function(a,b){a.state("search",{url:"/search",templateUrl:"views/search.html"}).state("results",{"abstract":!0,params:{query:null},controller:"ResultsCtrl",templateUrl:"views/results.html"}).state("results.list",{url:"/results",params:{query:null},controller:"ResultsCtrl",parent:"results",templateUrl:"views/results.list.html"}).state("results.ranked",{url:"/results",params:{query:null},controller:"ResultsCtrl",parent:"results",templateUrl:"views/results.list.html"}).state("results.analytics",{url:"/resultsanalytics",params:{query:null},controller:"ResultsCtrl",parent:"results",templateUrl:"views/results.analytics.html"}),b.otherwise("/results")}]).config(["$httpProvider",function(a){a.defaults.useXDomain=!0,delete a.defaults.headers.common["X-Requested-With"]}]).config(["$mdIconProvider",function(a){a.iconSet("social","img/icons/sets/social-icons.svg",24).defaultIconSet("img/icons/sets/core-icons.svg",24)}]).config(["paginationTemplateProvider",function(a){a.setPath("bower_components/angularUtils-pagination/dirPagination.tpl.html")}]);angular.module("TotalRecall").factory("searchFactory",["$http","$q","apiUrl",function(a,b,c){return{searchQuery:function(d,e){var f=b.defer();return a({method:"GET",url:c+"search?q="+d+"&row="+e}).success(function(a){f.resolve(a)}).error(function(){f.reject("There is an error")}),f.promise},getTrending:function(){var d=b.defer();return a({method:"GET",url:c+"trendingTopics"}).success(function(a){d.resolve(a)}).error(function(){d.reject("There is an error")}),d.promise}}}]),angular.module("TotalRecall").constant("apiUrl","http://localhost:5000/"),angular.module("TotalRecall").controller("SearchCtrl",["$scope","$state","searchFactory",function(a,b,c){var d=this;d.search=function(a){b.go("results.list",{query:a})}}]),app.controller("ResultsCtrl",["$scope","$state","$stateParams","searchFactory","NgMap",function(a,b,c,d,e){return void 0==c.query&&void 0==a.query?void b.go("search"):(a.selectedsentiment="all",a.Model=a.Model||{dynMarkers:[],locations:[],tweets:[],selectedIndex:0},c.query&&(a.Model.query=c.query||a.query),a.search=function(b){b&&"#"==b[0]&&(b=b.substring(1)),a.Model.query=b,d.searchQuery(b,1).then(function(b){a.Model.tweets=[],a.Model.dynMarkers=[],a.Model.locations=[],b.locations.map(function(a){return JSON.parse(JSON.stringify(a))}),void 0!==a.Model.markerClusterer&&a.Model.markerClusterer.setMap(null),a.Model.tweets=b.tweets,a.Model.locations=b.locations,a.Model.facet=b.facet_fields,e.getMap().then(function(c){for(var d=0;d<b.locations.length;d++){var e=new google.maps.LatLng(a.Model.locations[d][0],a.Model.locations[d][1]),f=new google.maps.Marker({position:e});f.setVisible(!1),a.Model.dynMarkers.push(f)}a.Model.markerClusterer=new MarkerClusterer(c,a.Model.dynMarkers,{})})})},a.search(a.Model.query),void d.getTrending().then(function(b){a.trending=b.trending}))}]),angular.module("TotalRecall").filter("sentiment",function(){return function(a,b){return"all"==b?a:a?a.filter(function(a,c){return a.sentiment.toLowerCase()==b}):void 0}});