let modal = document.querySelector('.modal');
let closeModal = document.querySelector('.close');
let showModal = document.querySelectorAll('.btnModalOpen');
console.log(showModal);

let showModalFunction = function () {
    modal.classList.remove("hidden");
};

for (let i = 0; i < showModal.length; i++) {
    // console.log(showModal[i].textContent);
    showModal[i].addEventListener('click', showModalFunction);
};

let closeModalFunction = function () {
    modal.classList.add('hidden');
}
closeModal.addEventListener('click', closeModalFunction);

let keyDownClose = function (e) {
    if (e.key === "Escape") {
        modal.classList.add('hidden');
    }
}

document.addEventListener('keydown', keyDownClose);