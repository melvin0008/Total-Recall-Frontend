'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the frontendApp
 */

Date.prototype.yyyymmdd = function() {
   var yyyy = this.getFullYear().toString();
   var mm = (this.getMonth()+1).toString(); // getMonth() is zero-based
   var dd  = this.getDate().toString();
   return yyyy +"-"+(mm[1]?mm:"0"+mm[0]) +"-"+ (dd[1]?dd:"0"+dd[0]); // padding
};
app.controller('ResultsCtrl', function ($scope,$state,$stateParams,searchFactory,NgMap) {
    $scope.arrows = {
        year: {
            left: 'images/white_arrow_left.svg',
            right: 'images/white_arrow_right.svg'
        },
        month: {
            left: 'images/grey_arrow_left.svg',
            right: 'images/grey_arrow_right.svg'
        }
    }

    var today=new Date();
    $scope.Model = $scope.Model || {dynMarkers : [],locations:[],tweets:[],selectedIndex:0,myDate1: new Date(today.getFullYear(), today.getMonth() - 1, 1).yyyymmdd(),myDate2:today.yyyymmdd()}
    if($stateParams.query==undefined && $scope.Model.query==undefined)
    {
        $state.go('search')
        return
    }
      // console.log($state.current.name)
    $scope.selectedsentiment="all"
    if($stateParams.query)
    {
      $scope.Model.query=$scope.Model.query||$stateParams.query
    }
    $scope.search=function(query){
        if(query && query[0]=='#')
            query=query.substring(1)
        $scope.Model.query=query
        searchFactory.searchQuery(query,1).then(function(data){
        $scope.Model.tweets=[]
        $scope.Model.dynMarkers=[]
        $scope.Model.locations=[]
        data.locations.map(function(s) {
              return JSON.parse(JSON.stringify(s))
        });
        if ($scope.Model.markerClusterer !== undefined){
                $scope.Model.markerClusterer.setMap(null)
        }
        $scope.Model.tweets=data.tweets
        $scope.Model.locations=data.locations
        $scope.facet=data.facet_fields || null;
        console.log(data.facet_fields)
        // $scope.Model.markerClusterer.setMap(null)
        NgMap.getMap().then(function(map) {
          // $scope.locations= $scope.locations || data.locations
          for (var i=0; i<data.locations.length; i++) {
            var latLng = new google.maps.LatLng($scope.Model.locations[i][0], $scope.Model.locations[i][1]);
            var marker=new google.maps.Marker({position:latLng})
            marker.setVisible(false)
            $scope.Model.dynMarkers.push(marker);
          }
          $scope.Model.markerClusterer = new MarkerClusterer(map, $scope.Model.dynMarkers, {});
        });
      })
    }
    $scope.search($scope.Model.query)
     searchFactory.getTrending().then(function(data){
        $scope.trending=data.trending
    });
});

