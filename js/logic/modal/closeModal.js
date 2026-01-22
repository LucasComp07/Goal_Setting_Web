import todoListRender from "../../components/todoListRender.js";

function closeModal() {
    const closeBtn = document.getElementById('CloseModal');
    const modal = document.querySelector('.modal');
    const content = modal.querySelector('.modalContent');

    closeBtn.addEventListener('click', () => {
        modal.close();
        content.innerHTML = '';
        todoListRender();
    });
}

export default closeModal;