'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the frontendApp
 */
app.controller('ResultsCtrl', function ($scope,$state,searchFactory) {
  	var self=this;
  	var query="paris"
  	self.search=function(query){
  		searchFactory.searchQuery(query).then(function(data){
  			// console.log("asd")
  			// $state.go('results.list');
  		})
  	}

  	self.selectedIndex = 0;
  	self.tweets=[{'handle':'MuniraAlii','pic':'http://pbs.twimg.com/profile_images/666384037364264960/_I_YEsn1_normal.jpg','text':"First Assad, then ISIS, now the West."},
  	{'handle':'MuniraAlii1','pic':'http://pbs.twimg.com/profile_images/666384037364264960/_I_YEsn1_normal.jpg','text':"First Assad, then ISIS, now the West."},
  	{'handle':'MuniraAlii2','pic':'http://pbs.twimg.com/profile_images/666384037364264960/_I_YEsn1_normal.jpg','text':"First Assad, then ISIS, now the West."},
  	{'handle':'MuniraAlii3','pic':'http://pbs.twimg.com/profile_images/666384037364264960/_I_YEsn1_normal.jpg','text':"First Assad, then ISIS, now the West."},
  	{'handle':'MuniraAlii4','pic':'http://pbs.twimg.com/profile_images/666384037364264960/_I_YEsn1_normal.jpg','text':"First Assad, then ISIS, now the West."},
  	{'handle':'MuniraAlii5','pic':'http://pbs.twimg.com/profile_images/666384037364264960/_I_YEsn1_normal.jpg','text':"First Assad, then ISIS, now the West."},
  	{'handle':'MuniraAlii6','pic':'http://pbs.twimg.com/profile_images/666384037364264960/_I_YEsn1_normal.jpg','text':"First Assad, then ISIS, now the West."},
  	{'handle':'MuniraAlii7','pic':'http://pbs.twimg.com/profile_images/666384037364264960/_I_YEsn1_normal.jpg','text':"First Assad, then ISIS, now the West."},
  	{'handle':'MuniraAlii8','pic':'http://pbs.twimg.com/profile_images/666384037364264960/_I_YEsn1_normal.jpg','text':"First Assad, then ISIS, now the West."},
  	{'handle':'MuniraAlii9','pic':'http://pbs.twimg.com/profile_images/666384037364264960/_I_YEsn1_normal.jpg','text':"First Assad, then ISIS, now the West."},
  	{'handle':'MuniraAlii10','pic':'http://pbs.twimg.com/profile_images/666384037364264960/_I_YEsn1_normal.jpg','text':"First Assad, then ISIS, now the West."},
  	{'handle':'MuniraAlii11','pic':'http://pbs.twimg.com/profile_images/666384037364264960/_I_YEsn1_normal.jpg','text':"First Assad, then ISIS, now the West."},
  	{'handle':'MuniraAlii12','pic':'http://pbs.twimg.com/profile_images/666384037364264960/_I_YEsn1_normal.jpg','text':"First Assad, then ISIS, now the West."},
  	{'handle':'MuniraAlii13','pic':'http://pbs.twimg.com/profile_images/666384037364264960/_I_YEsn1_normal.jpg','text':"First Assad, then ISIS, now the West."},
  	{'handle':'MuniraAlii14','pic':'http://pbs.twimg.com/profile_images/666384037364264960/_I_YEsn1_normal.jpg','text':"First Assad, then ISIS, now the West."},
  	{'handle':'MuniraAlii15','pic':'http://pbs.twimg.com/profile_images/666384037364264960/_I_YEsn1_normal.jpg','text':"First Assad, then ISIS, now the West."},
  	{'handle':'MuniraAlii16','pic':'http://pbs.twimg.com/profile_images/666384037364264960/_I_YEsn1_normal.jpg','text':"First Assad, then ISIS, now the West."},
  	{'handle':'MuniraAlii17','pic':'http://pbs.twimg.com/profile_images/666384037364264960/_I_YEsn1_normal.jpg','text':"First Assad, then ISIS, now the West."},
  	{'handle':'MuniraAlii18','pic':'http://pbs.twimg.com/profile_images/666384037364264960/_I_YEsn1_normal.jpg','text':"First Assad, then ISIS, now the West."},
  	{'handle':'MuniraAlii19','pic':'http://pbs.twimg.com/profile_images/666384037364264960/_I_YEsn1_normal.jpg','text':"First Assad, then ISIS, now the West."},
  	{'handle':'MuniraAlii20','pic':'http://pbs.twimg.com/profile_images/666384037364264960/_I_YEsn1_normal.jpg','text':"First Assad, then ISIS, now the West."},
  	{'handle':'MuniraAlii21','pic':'http://pbs.twimg.com/profile_images/666384037364264960/_I_YEsn1_normal.jpg','text':"First Assad, then ISIS, now the West."},
  	{'handle':'MuniraAlii22','pic':'http://pbs.twimg.com/profile_images/666384037364264960/_I_YEsn1_normal.jpg','text':"First Assad, then ISIS, now the West."}]
    $scope.$watch(function () {
        return self.selectedIndex;
    }, function(current, old) {
        switch (current) {
            case 0:
                $state.go('results.list');
                break;
            case 1:
                $state.go('results.analytics');
                break;
        }
    });
});

