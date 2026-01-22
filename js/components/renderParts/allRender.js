import progressBar from "./progressbar.js";
import deleteBtn from "../../logic/deleteBtn.js";

function allRender(data) {
    const bodychild1 = document.querySelector('.bodychild1');

    bodychild1.innerHTML = '';
    
    const node = data.map((todo, num) => {
            const containerTop = document.createElement('div');
            const containerBottom = document.createElement('div');

            const newTodo = document.createElement('div');
            const btn = document.createElement('button');
            const title = document.createElement('h2');
            const progressText = document.createElement('h3');

            let arrayCompleted = [];

            todo.listTodo.forEach(element => {
                arrayCompleted.push(element.status);
            });

            const bar = progressBar(arrayCompleted);
            const deleteButton = deleteBtn(data, num);

            containerTop.className = 'containerTodo';
            containerBottom.className = 'containerTodo';

            title.className = 'progressTitle';
            progressText.className = 'progressText';

            newTodo.className = 'todos';
            deleteButton.className = 'deleteBtn';
            title.textContent = todo.title;

            progressText.textContent = arrayCompleted.every(e => e === true) === true ? "Done" : "In progress";
            
            btn.className = 'modalbtn';
            btn.value = num;
            btn.textContent = "progress";

            newTodo.append(containerTop);
            newTodo.append(progressText);
            newTodo.append(containerBottom);

            containerTop.append(title)
            containerTop.append(btn);
            containerBottom.append(bar);
            containerBottom.append(deleteButton);

            arrayCompleted = [];

            return newTodo;
        })

        if(!node.length){
            const make = document.createElement('h1');
            bodychild1.append(make);
            make.textContent = 'Create A Goal!';
            make.style.marginTop = '300px';
        } 

        bodychild1.append(...node);
}

export default allRender;