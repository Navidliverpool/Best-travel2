// This function is only for demonstration purposes.
// This function creates subarrays from ls and store them in an array. 
function chooseBestSum(k, ls) {
    let slicedLs = [];
    let a = 0;
    let b = k;
    for (let i = 0; i < ls.length; i += 3) {
        slicedLs[a] = ls.slice(i, b);
        b += 3;
        a++;
    }
    console.log(slicedLs)
}
let ts = [50, 55, 56, 57, 58, 59];
console.log(chooseBestSum(3, ts))