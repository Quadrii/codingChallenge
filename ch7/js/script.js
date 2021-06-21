let mike = {
    fullName:'mark Jones',
    mass: 78,
    height: 1.69,
    calcBmi: function () {
        console.log(this);
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

let john = {
    fullName:'John Joe',
    mass: 92,
    height: 1.95,
    calcBmi: function () {
        console.log(this);
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

mike.calcBmi()
john.calcBmi()
console.log(john.bmi)
console.log(john.fullName)
console.log(mike.mass);
console.log(mike.bmi);

let higherBmi = function () {
    if (john.bmi > mike.bmi) {
        console.log (`johns BMI is greater with ${john.bmi}`)
    } else {
        console.log (`mike BMI is bigger with ${mike.bmi}`)
    }
}

higherBmi()

