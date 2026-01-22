import setData from '../backend/setData.js'
import todoListRender from '../components/todoListRender.js';

function setGoalButton() {
    const todoButton = document.querySelector('.todoButton');
    const todoTitle = document.querySelector('.todoTitle');
    const shortGoal = document.getElementsByClassName('shortGoal');

    todoButton.addEventListener('click', () => {
    
        try {
            let arrayGoal = [];
            if(todoTitle.value == '') {
                console.log("empty goal title!")
                return
            }

            for(let i = 0; i < shortGoal.length; i++) {
                if(!shortGoal[i].value) {
                    return console.log("put short term goals!");
                }
                arrayGoal.push({
                    todo: shortGoal[i].value,
                    status: false
                });
                shortGoal[i].value = '';
            }

            const dataTodo = {
                title: todoTitle.value,
                listTodo: arrayGoal,
                status: false
            }

            setData(dataTodo);

        } catch(err) {
            console.error(err);
        } finally {
            todoTitle.value = '';
            todoListRender();
        }

    })
}

export default setGoalButton;