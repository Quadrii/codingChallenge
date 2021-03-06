let toggleContent = document.querySelector('.toggle-text');
let toggleIcon = document.querySelector('.icon');
console.log(toggleIcon);

let toggleAction =
    toggleIcon.addEventListener('click', function () {
        toggleContent.classList.toggle('hidden')
    })


    let movements = [12, 13, 14, 17, 20, 25];
    let converToUsd = 1.2;

    // will throw undefined
    let looping = movements.forEach(function (mov) {
        return mov * converToUsd;
    })
    console.log(looping);

    // will work with map
    let loopingWithMap = movements.map(function (mov) {
        return mov * converToUsd;
    })
    console.log(loopingWithMap);


    // Map with arrow functions
    let loopingWithMapArrowFunc = movements.map( mov => mov * converToUsd);
    console.log(loopingWithMapArrowFunc)

    // Using for of Loop
    let converts = [];
    for (const mov of movements) {
        converts.push(mov * converToUsd);
    }
    console.log(converts)