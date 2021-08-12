let actionBtn = document.querySelector('.action');
console.log(actionBtn);

// function changes (el) {
//     if (el.innerText === 'Show') {
//         el.innerText = 'Hide';
//     }  else {
//         el.innerText = 'Show';
//     }
// };

// FLWPUBK_TEST-3d4f683ff450b69e231d587e357ccaf6-X
function change () {
    actionBtn.textContent == 'Show' ? actionBtn.textContent = 'Hide' : actionBtn.textContent = 'Show';
};

let showHide = actionBtn.addEventListener('click', change);
