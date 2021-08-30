let tip;
let bills = [125, 555, 44]

// without Loop
function calculateTips(billed) {
    if (billed >= 50 && billed <= 300) {
      tip =  billed * 0.5;
      console.log(tip)
    }else {
        tip = billed * 0.2;
        console.log(tip)
    }
};

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
bills.forEach (function (bill) {
  if (bill >= 50 && bill <= 300) {
    tip =  bill * 0.5;
    console.log(tip)
  }else {
      tip = bill * 0.2;
      console.log(tip)
  }
  let totalBill = tip + bill;
  console.log(totalBill);
})

// Using forEach & arrow Function
bills.forEach ( eachBill => {
  if (eachBill >= 50 && eachBill <= 300) {
    tip =  eachBill * 0.5;
    console.log(tip)
  }else {
      tip = eachBill * 0.2;
      console.log(tip)
  }
  let totalBill = tip + eachBill;
  console.log(totalBill);
})


console.log(bills);



