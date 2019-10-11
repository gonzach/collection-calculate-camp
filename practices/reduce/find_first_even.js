'use strict';

function find_first_even(collection) {
  
  return collection.reduce((prev, curr) => (prev + curr));
  
}

module.exports = find_first_even;

