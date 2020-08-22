// write a function that finds the average value in an array of numbers

function avg(arr) {
  let total = 0;
  // loop over each num
  for (let num of arr) {
    // add them together
    total += num;
  }
  // divide by number of nums
  return total / arr.length;
}

let mean = avg([2, 4, 6, 8, 10]);

console.log(mean);
