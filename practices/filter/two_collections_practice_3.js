'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  return collection_a.filter(collectionAList => collectionAList%collection_b
        .filter(collectionBList => collectionAList%collectionBList === 0) === 0);
}

module.exports = choose_divisible_integer;
