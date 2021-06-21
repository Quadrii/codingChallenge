let bill1 = 275;
let tip;
if (bill1 <= 50 && bill1 <= 300) {
    tip =bill1 * 0.2;
} else {
    tip =bill1 * 0.7;
}
console.log(tip)
let finalValue = bill1 + tip;
console.log (finalValue);