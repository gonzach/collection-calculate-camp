'use strict';

function get_union(collection_a, collection_b) {
  return Array.from(new Set([...collection_a, ...collection_b]));
}

module.exports = get_union;

