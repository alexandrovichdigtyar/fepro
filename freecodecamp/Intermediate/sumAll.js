/* We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first. */
function sumAll(arr) {
  arr = arr.sort((a, b) => (a - b));
  let res = arr[0];
  for (let i = arr[0]; i < arr[arr.length - 1]; i++) {
    res += i + 1;
  }
  return res;
}

sumAll([5, 10]);