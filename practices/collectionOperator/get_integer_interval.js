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

  if (number_a == number_b){
        arrayNumber= [number_a];
        return(arrayNumber);
  }

}

module.exports = get_integer_interval;

