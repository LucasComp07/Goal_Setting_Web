async function getData() {
    let arr = [];

    for(let i = 0; i < localStorage.length; i++) {
        const todos = JSON.parse(localStorage.getItem(`${i}`));
        arr.push(todos);
    }

    return arr;
}

export default getData;