import getData from "../backend/getData.js";
import allRender from "./renderParts/allRender.js";
import inProgress from "./renderParts/inProgressRender.js";
import completedRender from "./renderParts/completedRender.js";

let currentView = 3; 

async function todoListRender() {
    try {
        const data = await getData();
        const buttons = document.querySelectorAll('.navBtn');

        const updateView = (type) => {

            currentView = parseInt(type); 

            if (currentView === 1) {
                inProgress(data);
            } else if (currentView === 2) {
                completedRender(data);
            } else {
                allRender(data);
            }
        };

        updateView(currentView);

        buttons.forEach(btn => {
            btn.onclick = () => {
                updateView(btn.value);
            };
        });

    } catch (err) {
        console.error("Rendering failed:", err);
    }
}

export default todoListRender;