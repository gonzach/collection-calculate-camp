'use strict';

function compute_average(collection) {

  const sum = (prev, curr) => (prev + curr);
  return collection.reduce(sum, 0) / collection.length;
  
}

module.exports = compute_average;

