'use strict';

var number_map_to_word = function(collection){

  return collection.map(numberList => String.fromCharCode(number+64).toLowerCase());

};

module.exports = number_map_to_word;
