let bills = [22, 295, 176, 440, 37, 185, 10, 1188, 86, 52]
let tips = [];
let totals = [];

function calcTips(bill) {
    if (bill >= 50 && bill <= 300) {
       return bill * 0.2;
    } else {
       return bill * 0.5;
    }
}

for (let i =0; i < bills.length; i++) {
   let tip = calcTips(bills[i]);
   tips.push(tip);
   totals.push(tip + bills[i]);
}

console.log(tips);
console.log(totals);


let calcAverage = function (arr) {
   let sum = 0;
   for (let i = 0;  i < arr.length; i++) {
      sum += arr[i];
   }
   console.log(sum)
   let average = sum / arr.length;
   console.log(average)
}

calcAverage([23, 14, 12, 10, 30, 10, 6, 3, 9])

let missingNumber = function (list) {
   let findDifference = list[0] + list[1] / 2;
   console.log(findDifference)
   return list;
}


console.log(missingNumber([1, 3, 5, 7, 9, 11, 13, 15, 17]))

// For aBBREVIATING wORDS //
function abbreviate(string) {
   return string.replace(/\B\w{2,}\B/g, match=> match.length);
 }
