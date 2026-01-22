import setGoalButton from "./logic/setGoalButton.js";
import addGoalButton from "./logic/addGoalButton.js";
import removeGoalButton from "./logic/removeGoalButton.js";

import setGoalWindow from "./components/setGoalWindow.js";

import todoListRender from "./components/todoListRender.js";
import modal from "./logic/modal/modal.js";

document.addEventListener('DOMContentLoaded', async () => {
    await todoListRender();
    modal();          
});

addGoalButton();
removeGoalButton();
setGoalButton();

setGoalWindow();