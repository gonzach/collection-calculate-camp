'use strict';

function compute_chain_median(collection) {

    let splitCollection = collection.split('->');
    let collections = splitCollection.map(number => parseInt(number,10)).sort((a,b) => a-b);
    let half = Math.floor(collections.length/2);

    if(collections.length % 2)
        return collections[half];
    else
        return (collections[half-1] + collections[half]) / 2.0;

}

module.exports = compute_chain_median;
