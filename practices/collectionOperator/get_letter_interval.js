'use strict';

function get_letter_interval(number_a, number_b) {

  let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  let letter = "h";
  let letterPosition = alphabet.indexOf(letter)+1;

  let result = [];

    if (number_a > number_b ){
      for(let i = number_a; i >= number_b ; i--){
            result.push((i + 9).toString(36).toLowerCase());
      }
      return result;
    } else {
      for(let i = number_a; i<= number_b ; i++){
        result.push((i + 9).toString(36).toLowerCase());
      }
      return result;
    }
}

module.exports = get_letter_interval;
