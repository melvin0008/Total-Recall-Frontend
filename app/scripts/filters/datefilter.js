'use strict';

/**
 * @ngdoc filter
 * @name TotalRecall.filter:datefilter
 * @function
 * @description
 * # datefilter
 * Filter in the TotalRecall.
 */

function parseDate(input) {
  return new Date(input); 
}

angular.module('TotalRecall')
  .filter('datefilter', function () {
     return function(items, from, to) {
        var df = parseDate(from);
        var dt = parseDate(to);
        var result = [];
        for (var i=0; i<items.length; i++){
            var tf = new Date(items[i].date)
            if (tf.getTime() > df.getTime() && tf.getTime() < dt.getTime())  {
                result.push(items[i]);
            }
        }
        return result;
  };
});
