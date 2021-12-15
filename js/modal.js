// ======Скрипт для функционала модалки
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

// ========Скрипт для отправке данных
// (() => {
//   document
//     .querySelector('.js-speaker-form')
//     .addEventListener('submit', e => {
//       e.preventDefault();

//       new FormData(e.currentTarget).forEach((value, name) =>
//         console.log('${name}: ${value}'),
//       );

//       e.currentTarget.removeEventListener();
//     });
// }
// )();