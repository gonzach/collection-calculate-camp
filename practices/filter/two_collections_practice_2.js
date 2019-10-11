'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  return collection_a.filter( finalListA => !(collection_b.includes(finalListA)));
}

module.exports = choose_no_common_elements;
