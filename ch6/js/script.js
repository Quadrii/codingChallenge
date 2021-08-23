let tip;
function calculateTips(billed) {
    if (billed >= 50 && billed <= 300) {
      tip =  billed * 0.5;
      console.log(tip)
    }else {
        tip = billed * 0.2;
        console.log(tip)
    }
};

// without Loop
let tips = calculateTips(bills[0]);
 tips = calculateTips(bills[1]);
 tips = calculateTips(bills[2]);
let tipValue = [25, 111, 22]

let finalValue = bills + tipValue;
let bill1 = bills[0] + tipValue[0];
let bill2 = bills[1] + tipValue[1];
let bill3 = bills[2] + tipValue[2];
let totalBill = [bill1, bill2, bill3];
console.log(totalBill);
console.log(bill1);

// Using forEach Loop
let bills = [125, 555, 44]
bills.forEach (function (billed) {
  if (billed >= 50 && billed <= 300) {
    tip =  billed * 0.5;
    console.log(tip)
  }else {
      tip = billed * 0.2;
      console.log(tip)
  }
})
console.log(bills);



