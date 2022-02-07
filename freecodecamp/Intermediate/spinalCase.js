function spinalCase(str) {
  str = str.split('_').join('').split(/(?=[A-Z])/).join(',').split(" ").join().split(',').filter(Boolean).join('-').replace(/\s/g, '').toLowerCase();
  return str;
}

spinalCase("Teletubbies say Eh-oh")

/* Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes. */


