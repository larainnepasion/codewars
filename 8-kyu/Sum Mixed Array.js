/* Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number. */

function sumMix(x){
    let arrOfNumbers = x.map(element => Number(element))
    return arrOfNumbers.reduce((current, accumulator) => current + accumulator, 0)
  }