function chooseBestSum(ls) {
    let a = 0;
    let arr = [];
    let b = ls[0];
    // for (let i = 0; i < ls.length; i += 3) {
    //     if (ls[i] > ls[0]) {
    //         b = ls[i];
    //     }
    // }
    let c = 3;
    let j = 0;
    // c should be replaced with k.
    while (c <= 3) {
        if (ls[j] > ls[0]) {
            b = ls[j];
        }
        j++;
        if (j == ls.length) {
            arr[c] = b;
            b = 0;
            c++;
        }
    }
    return arr;
}
let ts = [50, 55, 56, 57, 58, 59];
console.log(chooseBestSum(ts))