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
// 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



function change () {
    actionBtn.textContent == 'Show' ? actionBtn.textContent = 'Hide' : actionBtn.textContent = 'Show';
};

let showHide = actionBtn.addEventListener('click', change);
