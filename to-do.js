const addButtonElement = document.getElementById("add-button");
const inputValueElement = document.getElementById("input-field");
const myToDoListElement = document.getElementById("myToDoList");

let toDoList = [];

addButtonElement.onclick = function () {
  const addListElement = document.createElement("li");
  const span = document.createElement("span");
  const text = document.createTextNode(inputValueElement.value);
  span.appendChild(text);
  addListElement.appendChild(span);
  myToDoListElement.appendChild(addListElement);
  inputValueElement.value = "";
};
