'use strict';

function calculate_elements_sum(collection) {
  
  const sum = (prev, curr) => (prev + curr);
  return collection.reduce(sum, 0);

}

module.exports = calculate_elements_sum;

