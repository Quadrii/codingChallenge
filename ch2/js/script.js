let johnMass = 230;
let johnHeight = 10;
let mikeMass = 170;
let mikeHeight = 50;

let johnBmi = johnMass / johnHeight ** 2;
let mikeBmi = mikeMass / mikeHeight ** 2;
let mikeHigherBmi = mikeBmi > johnBmi;
let johnHigherBmi = johnBmi > mikeBmi;

console.log(johnBmi);


if (johnHigherBmi) {
    console.log ('John\s BMI is higher than Mike\s')
} else {
    console.log ('Mike\s BMI is higher than John\s')
}