import closeModal from './closeModal.js';
import modalRender from '../../components/modalRender.js';
import modalCheckBox from './modalCheckBox.js';
import checkModal from './checkModal.js';
import getData from '../../backend/getData.js';

function modal() {
  const modalEl = document.querySelector('.modal');

  document.addEventListener('click', async (e) => {
    const btn = e.target.closest('.modalbtn');
    if (!btn) return;

    const index = Number(btn.value);
    const data = await getData();
    const currTodo = data[index];

    await modalRender(index);
    const check = await checkModal(currTodo);

    modalEl.showModal();
    modalCheckBox(check, index, currTodo);
  });

  closeModal();
}

export default modal;