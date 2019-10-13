'use strict';

function get_integer_interval(number_a, number_b) {
  let arrayNumber = [];
  if (number_a < number_b){
     for(let startNum = number_a; startNum<=number_b; startNum++){
          arrayNumber.push(startNum);
        }
        return arrayNumber;
  }

  if (number_a > number_b){
     for(let startNum = number_a; startNum>=number_b; startNum--){
            arrayNumber.push(startNum);
     }
        return arrayNumber;
  }

//  if (number_a == number_b){
//    return arrayNumber.push([5]);
//  }

}
module.exports = get_integer_interval;

