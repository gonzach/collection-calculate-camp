'use strict';

function get_letter_interval(number_a, number_b) {

  let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  let letter = "h";
  let letterPosition = alphabet.indexOf(letter)+1;

  let array = [];
  for(let i = number_a; i<= number_b ; i++){
    console.log(alphabet.indexOf(i))
  }
}

module.exports = get_letter_interval;
