'use strict';

function get_intersection(collection_a, collection_b) {

  return collection_b.filter(objectB => collection_a.includes(objectB));

}

module.exports = get_intersection;
