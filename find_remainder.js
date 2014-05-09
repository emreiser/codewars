function remainder(a, b){
  return Math.max.apply(Math, arguments) % Math.min.apply(Math, arguments);
}


// Description:
// Write a function that accepts two arguments and returns the remainder after dividing the larger number by the smaller number. Division by zero should return NaN. Arguments will both be integers.