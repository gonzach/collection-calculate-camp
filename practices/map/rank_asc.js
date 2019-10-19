'use strict';

var rank_asc = function(collection){

  const sortedCollection = collection.sort();
  return sortedCollection.map(sortedCollection.pop,[...sortedCollection]);

};

module.exports = rank_asc;
