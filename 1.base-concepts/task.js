"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let D = b ** 2 - 4 * a * c;
  let firstX, secondX;

  if (D === 0) {
    firstX = -b / (2 *a);
    arr.push(firstX);
  } 
  else if (D > 0) {
    firstX = ((-b + Math.sqrt(D)) / (2 * a));
    secondX = ((-b - Math.sqrt(D)) / (2 * a));
    arr.push(firstX, secondX);
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthPercent = percent / 100 / 12;
  let creditBody = amount - contribution;
  let monthPayment = creditBody * (monthPercent + (monthPercent / (((1 + monthPercent) ** countMonths) - 1)));
  let total = parseFloat((monthPayment * countMonths).toFixed(2));

  return total;
}