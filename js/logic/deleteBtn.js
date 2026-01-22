import setData from "../backend/setData.js";
import todoListRender from "../components/todoListRender.js";

function deleteBtn(data, num) {
    const btn = document.createElement('button');
    
    btn.value = num;
    btn.textContent = 'Delete';

    btn.addEventListener('click', () => {
        data.splice(num, 1);
        localStorage.clear();
        data.forEach(ele => {
            setData(ele);
        });
        todoListRender();
    }); 

    return btn;
}

export default deleteBtn;