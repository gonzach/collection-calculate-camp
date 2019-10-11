'use strict';

function grouping_count(collection) {

  
  //console.log(Object.entries(collection));
  //console.log(Object.values(collection));
  //console.log(Object.keys(collection));
  console.log(collection.filter(listA => Object.values(listA) === 1));
}

module.exports = grouping_count;

