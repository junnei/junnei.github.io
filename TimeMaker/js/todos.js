const toDoForm = document.getElementById("input-wrap");
const toDoInput = toDoForm.querySelector(".input-box");
const resetBtn = toDoForm.querySelector(".reset-btn");

function initTodos() {
    toDoInput.addEventListener("keydown", (e)=> {
        if(e.key=='Enter'){
            handleSubmit();
        }
    });
    resetBtn.addEventListener("click", handleSubmit);
}

function handleSubmit() {
    const currentValue = toDoInput.value;
    const today = new Date();
    const key = today.getFullYear() + ((today.getMonth() + 1) < 10 ? '0' + (today.getMonth() + 1) : (today.getMonth() + 1)).toString() + ( today.getDate() < 10 ? '0' + today.getDate() : today.getDate() )
    write(key, currentValue);
    toDoInput.value = "";
    
}

function write(cell, currentValue) {
    if (currentValue === undefined || currentValue === "") return;
    const keyId = cell;
    
    if (JSON.parse(localStorage.getItem(keyId)) === null) {
        textData = [];
    }
    else {
        textData = JSON.parse(localStorage.getItem(keyId));
    }
    const textObj = { id: textData.length + 1, text: currentValue };
    textData.push(textObj);
    localStorage.setItem(keyId, JSON.stringify(textData));
  }

initTodos();