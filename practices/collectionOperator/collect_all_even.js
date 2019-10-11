'use strict';

function collect_all_even(collection) {
  const even_num_res = num => num % 2 === 0;
  return collection.filter(even_num_res);
}

module.exports = collect_all_even;
