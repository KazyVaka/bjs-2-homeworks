"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let D = b ** 2 - 4 * a * c;
  let fstX, sndX;

  if (D < 0) {
    return arr;
  } 
  else if (D === 0) {
    fstX = -b / (2 *a);
    arr.push(fstX);

    return arr;
  } 
  else if (D > 0) {
    fstX = (-b + Math.sqrt(D) / (2 * a));
    sndX = (-b - Math.sqrt(D) / (2 * a));
    arr.push(fstX, sndX);

    return arr;
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}