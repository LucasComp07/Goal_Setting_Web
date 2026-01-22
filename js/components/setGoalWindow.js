function setGoalWindow() {
    const modal = document.querySelector('.modalTodo');
    const openBtn = document.getElementById('createBtn');
    const closeBtn = document.getElementById('removeBtn');

    openBtn.addEventListener('click', () => {
        modal.showModal();
    })

    closeBtn.addEventListener('click', () => {
        modal.close();
    })

}

export default setGoalWindow;