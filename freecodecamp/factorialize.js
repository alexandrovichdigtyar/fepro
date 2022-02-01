function factorialize(num) {
    let res = 1;
    for (let i = 1; i < num; i++) {
        res *= (i + 1);
    }
    return res;
}

factorialize(5); 