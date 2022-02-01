function repeatStringNumTimes(str, num) {
    return num >= 0 ? Array(num).fill(str).join('') : "";
}

repeatStringNumTimes("abc", 3);