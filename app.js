"use strict"

const todoList = document.getElementById("list");
const addInput = document.getElementById("input");
let trash;

const addToDo = () => {
    let text = addInput.value;
    if (text !== ""){
        let todoLi = document.createElement("li");

        let currentDate = new Date();
        let cDay = currentDate.getDate();
        let cMonth = currentDate.getMonth() + 1;
        let cYear = currentDate.getFullYear();
        let todoData = document.createElement("p");
        todoData.innerHTML = `${cDay} / ${cMonth} / ${cYear}`;

        let todoCheck = document.createElement("input");
        todoCheck.classList.add("checkbox");
        todoCheck.type = "checkbox";
        todoCheck.onclick = function () {
            if(todoCheck.parentElement.childNodes.item(1).className === "checked"){
                todoCheck.parentElement.childNodes.item(1).classList.remove("checked");
                todoCheck.parentElement.childNodes.item(1).classList.add("unchecked");
                todoCheck.parentElement.removeChild(todoData);
            }
            else{
                todoCheck.parentElement.childNodes.item(1).classList.remove("unchecked");
                todoCheck.parentElement.childNodes.item(1).classList.add("checked");
                todoCheck.parentElement.appendChild(todoData);
            }
        };

        let todoPara = document.createElement("p");
        todoPara.classList.add("unchecked");
        todoPara.textContent = text;

        let todoRemove = document.createElement("button");
        todoRemove.type = "button";
        todoRemove.classList.add("hidebtn");
        todoRemove.textContent = "X";
        todoRemove.onclick = function () {
            $(todoRemove.parentElement).hide();
            trash = todoRemove.parentElement;
        }

        todoLi.appendChild(todoCheck);
        todoLi.appendChild(todoPara);
        todoLi.appendChild(todoRemove);

        todoList.appendChild(todoLi);
    }
    addInput.value = "";
}

const undoToDo = () =>{
    if(trash !== null){
        $(trash).show();
    }
}