function addGoalButton() {
    try {
        const btn = document.getElementById('addGoal');
        const shortGoalArea = document.getElementById('shortGoalArea');
        const shortGoal = document.getElementsByClassName('shortGoal');

        btn.addEventListener("click", () => {
            const newGoal = document.createElement('input');
            newGoal.className = 'shortGoal';
            shortGoalArea.append(newGoal);
            console.log(shortGoal.length)
            });
    } catch(err) {
        console.error(err);
    }
}

export default addGoalButton;