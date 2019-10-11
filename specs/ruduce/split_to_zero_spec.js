'use strict';

var split_to_zero = require('../../practices/ruduce/split_to_zero.js');

describe('split_to_zero', function () {

  var collection_a = [0.8, 0.6, 0.4, 0.2, 0];
  var collection_b = [0.7, 0.4, 0.1, -0.2];

  it('', function() {

    var result = split_to_zero(0.8, 0.2);
    console.log(result);
    expect(result).toEqual(collection_a);
  });

  it('', function() {

    var result = split_to_zero(0.7, 0.3);
    expect(result).toEqual(collection_b);
  });
});
