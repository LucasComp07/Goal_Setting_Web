import overWriteData from "../../backend/overWriteData.js";

function modalCheckBox(check, key, currTodo) {
  const checkB = document.querySelectorAll('[type="checkbox"]');
  
  checkB.forEach((item, num) => {
    if(check[num] === true) {
      item.checked = true;
    }

    item.onchange = (event) => {
      if(event.target.checked) {
        console.log(`checked`);
        currTodo.listTodo[event.target.value].status = true;
        console.log(currTodo);
        overWriteData(key, currTodo);
      } else {
        console.log("uncheked");
        currTodo.listTodo[event.target.value].status = false;
        console.log(currTodo);
        overWriteData(key, currTodo)
      }
    }
  });
  
}

export default modalCheckBox;