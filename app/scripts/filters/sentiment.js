'use strict';

/**
 * @ngdoc filter
 * @name TotalRecall.filter:sentiment
 * @function
 * @description
 * # sentiment
 * Filter in the TotalRecall.
 */
angular.module('TotalRecall')
  .filter('sentiment', function () {
    return function (input,sentiment) {
       if (sentiment=="all")
       	  return input
       if(input)
     	{
	      	return input.filter(function(item, index){
	          	return item.sentiment.toLowerCase()==sentiment
	      	})
    	}
    };
  });
