function removeGoalButton() {
    const btn = document.getElementById('removeGoal');
    const elements = document.getElementsByClassName('shortGoal');

    btn.addEventListener('click', () => {
        if(elements.length === 1) return;
        const lastElement = elements[elements.length - 1];
        lastElement.remove();
    });
}

export default removeGoalButton;