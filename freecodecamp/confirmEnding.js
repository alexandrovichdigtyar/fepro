function confirmEnding(str, target) {
    return str.slice(-target.length) === target ? true : false;
}

confirmEnding("Bastian", "n"); 

/* Check if a string (first argument, str) ends with the given target string (second argument, target). */