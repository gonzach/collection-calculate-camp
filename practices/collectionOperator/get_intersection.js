'use strict';

function get_intersection(collection_a, collection_b) {
  const res = collection_a.sort();
  return res;
  const result = collection_a.reverse().filter(objectA => collection_b.includes(objectA));
  
}

module.exports = get_intersection;
