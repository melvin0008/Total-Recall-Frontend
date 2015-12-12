'use strict';

describe('Filter: sentiment', function () {

  // load the filter's module
  beforeEach(module('TotalRecall'));

  // initialize a new instance of the filter before each test
  var sentiment;
  beforeEach(inject(function ($filter) {
    sentiment = $filter('sentiment');
  }));

  it('should return the input prefixed with "sentiment filter:"', function () {
    var text = 'angularjs';
    expect(sentiment(text)).toBe('sentiment filter: ' + text);
  });

});
