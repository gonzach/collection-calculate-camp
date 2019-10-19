'use strict';

function get_integer_interval_2(number_a, number_b) {
  let arrayNumber = [];
  let intervalNumber = number_a;
  if (number_a < number_b){
    for(let startNum = number_a; intervalNumber<number_b; startNum++){
      intervalNumber = startNum * 2;
      arrayNumber.push(intervalNumber);
    }
    return arrayNumber;
  }

  if (number_a > number_b){
    for(let startNum = number_a; startNum>number_b; startNum--){
      if (startNum % 2 == 0){
        arrayNumber.push(startNum);
      }
    }
    return arrayNumber;
  }
  let count = 0;
  if (number_a === number_b){
    for(let startNum = number_a; count<number_b; startNum++){
        arrayNumber.push(intervalNumber);
        intervalNumber = startNum*number_a;
        count++;
    }
    return [arrayNumber[0]];
  }

  if (number_a === number_b){
    for(let startNum = number_a; count<number_b; startNum++){
        arrayNumber.push(intervalNumber);
        intervalNumber = startNum*number_a;
        count++;
    }
    arrayNumber = [];
    return [];
  }
}

module.exports = get_integer_interval_2;
