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

  let count = 0; 
  if (number_a === number_b){
    for(let startNum = number_a; count<number_b; startNum++){       
        arrayNumber.push(startNum);
        count++;
    }
    return [arrayNumber[0]]; 
  }

}

module.exports = get_integer_interval;

