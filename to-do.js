const addButtonElement = document.getElementById("add-button");
console.log(addButtonElement);
const inputValueElement = document.getElementById("add-input");
console.log(inputValueElement);
const myToDoListElement = document.getElementById("myToDoList");
console.log(myToDoListElement);

let toDoList = [];

addButtonElement.onclick = function () {
  const addListElement = document.createElement("li");
  const span = document.createElement("span");
  const text = document.createTextNode(inputValueElement.value);
  span.appendChild(text);
  addListElement.appendChild(span);
  myToDoListElement.appendChild(addListElement);
};
