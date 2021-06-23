let toggleContent = document.querySelector('.toggle-text');
let toggleIcon = document.querySelector('.icon');
console.log(toggleIcon);

let toggleAction =
    toggleIcon.addEventListener('click', function () {
        toggleContent.classList.toggle('hidden')
    })
