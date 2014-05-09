function sumDigits(number) {
  digits = number.toString().replace(/-/, '').split('');
  return parseInt(digits.reduce(function(a, b) { return parseInt(a) + parseInt(b); }))
}

// Description:
// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits. For example: