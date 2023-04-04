const addButtonElement = document.getElementById("add-button");
const inputValueElement = document.getElementById("input-field");
const myToDoListElement = document.getElementById("myToDoList");

let toDoList = [];

addButtonElement.onclick = function () {
  if (inputValueElement.value.length > 0) {
    const listContainerElement = document.createElement("div");
    const li = document.createElement("li");
    const toDoText = document.createTextNode(inputValueElement.value);
    li.appendChild(toDoText);
    listContainerElement.appendChild(li);
    myToDoListElement.appendChild(listContainerElement);
    inputValueElement.value = "";

    //create mark button
    const markButton = document.createElement("button");
    markButton.innerHTML = "✔️";
    markButton.onclick = markElement;
    listContainerElement.appendChild(markButton);

    //create delet button
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "✖️";
    deleteButton.onclick = removeElement;
    listContainerElement.appendChild(deleteButton);
  }
};

function markElement() {
  const element = this.parentNode;
  element.style.textDecoration = "line-through";
}

function removeElement() {
  const element = this.parentNode;
  element.parentNode.removeChild(element);
}

// addButtonElement.onclick = function () {
//   if (inputValueElement.value.length > 0) {
//     const addListElement = document.createElement("li");
//     const span = document.createElement("span");
//     const text = document.createTextNode(inputValueElement.value);
//     span.appendChild(text);
//     addListElement.appendChild(span);
//     myToDoListElement.appendChild(addListElement);
//     inputValueElement.value = "";

//     //create mark button
//     const markButton = document.createElement("button");
//     markButton.innerHTML = "✔️";

//     span.appendChild(markButton);
//     const deleteButton = document.createElement("button");
//     deleteButton.innerHTML = "✖️";
//     span.appendChild(deleteButton);
//   }
// };
