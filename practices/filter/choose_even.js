'use strict';

function choose_even(collection) {

  return collection.filter(collectionObject => collectionObject % 2 == 0);

}

module.exports = choose_even;
