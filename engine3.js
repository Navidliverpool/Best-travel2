function chooseBestSum(ls) {
    let arr = [];
    let b = ls[0];
    let c = 0;
    let j = 1;
    let index = '';
    // c should be replaced with k.
    while (c <= 3) {
        if (ls[j] > b) {
            b = ls[j];
            console.log("b:", b)
        }
        j++;
        if (j >= ls.length) {
            console.log("j:", j)
            arr.push(b);
            console.log("arr:", arr)
            b = ls[0];
            index = ls.indexOf(j);
            if (index > -1) { // only splice array when item is found
                ls.splice(index, 1); // 2nd parameter means remove one item only
            }
            console.log("ls:", ls)
            c++;
            j = 1;
        }
    }
    return arr;
}
let ts = [50, 55, 56, 57, 58, 59];
console.log(chooseBestSum(ts))