function diffArray(arr1, arr2) {
  let newArr = arr1.concat(arr2);
  return newArr = newArr.filter(value => newArr.indexOf(value) == newArr.lastIndexOf(value)? value: false);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

/* Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays. */