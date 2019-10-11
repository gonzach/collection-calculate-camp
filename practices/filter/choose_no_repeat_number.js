'use strict';

function choose_no_repeat_number(collection) {

  return collection.filter((item, index, object) => object.indexOf(item) == index);

}

module.exports = choose_no_repeat_number;
