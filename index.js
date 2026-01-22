import setGoalButton from "./js/logic/setGoalButton.js";
import addGoalButton from "./js/logic/addGoalButton.js";
import removeGoalButton from "./js/logic/removeGoalButton.js";

import setGoalWindow from "./js/components/setGoalWindow.js";

import todoListRender from "./js/components/todoListRender.js";
import modal from "./js/logic/modal/modal.js";

document.addEventListener('DOMContentLoaded', async () => {
    await todoListRender();
    modal();          
});

addGoalButton();
removeGoalButton();
setGoalButton();

setGoalWindow();