'use strict';

describe('Filter: datefilter', function () {

  // load the filter's module
  beforeEach(module('TotalRecall'));

  // initialize a new instance of the filter before each test
  var datefilter;
  beforeEach(inject(function ($filter) {
    datefilter = $filter('datefilter');
  }));

  it('should return the input prefixed with "datefilter filter:"', function () {
    var text = 'angularjs';
    expect(datefilter(text)).toBe('datefilter filter: ' + text);
  });

});
