'use strict';

function grouping_count(collection) {

  const item_count = {};
  collection.forEach((item)=>{
    item_count[item] = item_count[item] + 1 || 1;
 });
 return item_count;

}

module.exports = grouping_count;

