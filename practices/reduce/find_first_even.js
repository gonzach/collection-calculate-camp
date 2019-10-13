'use strict';

function find_first_even(collection) {
  
  let res = collection.filter(collectionObject => collectionObject % 2 == 0);
  return res[0];
  
}

module.exports = find_first_even;

