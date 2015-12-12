'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the frontendApp
 */
app.controller('ResultsCtrl', function ($scope,$state,$stateParams,searchFactory,NgMap) {
      $scope.Model = $scope.Model || {dynMarkers : [],locations:[],tweets:[],selectedIndex:0}
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
        $scope.Model.facet=data.facet_fields
        console.log(data.tweets)
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

