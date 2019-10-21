'use strict';

function spilt_to_zero(number, interval) {

  let splitResult = [];
  splitResult.push(number);
  for(let num = number; num > 0; ){
    num = num - interval;
      splitResult.push((num).toFixed(1));
    }
    return splitResult;
}

module.exports = spilt_to_zero;
