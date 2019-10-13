'use strict';

function compare_collections(collection_a, collection_b) {
  
  return (JSON.stringify(collection_a)==JSON.stringify(collection_b));
}

module.exports = compare_collections;


