import getData from "../backend/getData.js";

async function modalRender(num) {
    const title = document.getElementById('title');
    const modal = document.querySelector('.modalContent');

    const data = await getData();
    title.textContent = data[num].title;

    const node = data[num].listTodo.map((ele, num) => {
        const box = document.createElement('div');
        const text = document.createElement('p');
        const checkBox = document.createElement('input');

        text.textContent = ele.todo;
        text.className = 'modalText';

        box.className = 'modalContain';

        checkBox.type = 'checkbox';
        checkBox.value = num;

        box.append(text, checkBox);

        return box;
    })

    modal.append(...node);
    return;
}

export default modalRender;