function destroyer() {

  for (let i = 1; i < arguments.length; i++) {
    arguments[0] = arguments[0].filter(value => value !== arguments[i])
  }

  return arguments[0];
}

destroyer([1, 3, 2, 1, 2, 3], 2, 3);

/* You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments. */