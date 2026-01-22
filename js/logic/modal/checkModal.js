function checkModal(data) {
    const todo = data.listTodo;
    let check = []
    todo.forEach(ele => {
        if(ele.status === true) {
            check.push(true);
        } else {
            check.push(false);
        }
    })
    return check;
}

export default checkModal;