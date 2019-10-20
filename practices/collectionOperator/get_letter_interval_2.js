'use strict';

function get_letter_interval_2(number_a, number_b) {
  let result = [];
  let next, first;
  for (let i = number_a; i <= number_b; i++) {
    first = (i - 1) % 26;
    next = String.fromCharCode(65 + first) + next;
    result.push(next);
    i = (i - first)/26 | 0;
  }
  return next;
}

module.exports = get_letter_interval_2;

