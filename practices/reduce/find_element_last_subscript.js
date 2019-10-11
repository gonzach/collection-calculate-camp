'use strict';

function calculate_elements_sum(collection, element) {
  
  const find = index => Object.values(collection)[index];
  return collection.reduce(find, element);
}

module.exports = calculate_elements_sum;
