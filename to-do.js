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

  //create mark button
  const markButton = document.createElement("button");
  markButton.innerHTML = "✔";
  span.appendChild(markButton);

  // //solusion 1(not working)
  // const markButtonClick = markButton;
  // markButtonClick.addEventListener.textDecoration = "line-through";
  // //solusion 2(always working)
  // markButton.onclick = myToDoListElement.style.textDecoration = "line-through";

  // create delete button
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "❌";
  span.appendChild(deleteButton);
};
