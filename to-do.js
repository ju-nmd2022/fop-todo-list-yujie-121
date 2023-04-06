let addButtonElement;
let inputValueElement;
let myToDoListElement;

let toDoList = [];

function onLoadHandler() {
  addButtonElement = document.getElementById("add-button");
  inputValueElement = document.getElementById("input-field");
  myToDoListElement = document.getElementById("myToDoList");

  addButtonElement.addEventListener("click", addToDoItemElement);

  const saveButton = document.getElementById("add-button");
  saveButton.addEventListener("click", function () {
    saveToDoLists();
  });

  function addToDoItemElement() {
    if (inputValueElement.value.length > 0) {
      const listContainerElement = document.createElement("div");
      const li = document.createElement("li");
      const toDoText = document.createTextNode(inputValueElement.value);
      li.appendChild(toDoText);
      listContainerElement.appendChild(li);
      myToDoListElement.appendChild(listContainerElement);
      inputValueElement.value = "";
      localStorage.item = inputValueElement.value;

      //create mark button
      const markButton = document.createElement("button");
      markButton.innerHTML = "✔️";
      markButton.addEventListener("click", markElement);
      listContainerElement.appendChild(markButton);

      //create delete button
      const deleteButton = document.createElement("button");
      deleteButton.innerHTML = "❌";
      deleteButton.addEventListener("click", removeElement);
      listContainerElement.appendChild(deleteButton);
    }
  }
}

function cleanElement() {
  const element = this.parentNode;
  element.style.textDecoration = "none";
}

function markElement() {
  const element = this.parentNode;
  element.style.textDecoration = "line-through";
}

function removeElement() {
  const element = this.parentNode;
  element.parentNode.removeChild(element);
}

function saveToDoLists() {
  let listItem = {
    item: "undefined",
  };
  if (localStorage.listItem === undefined) {
    localStorage.listItem = JSON.stringify([]);
  }
  let listItemArray = JSON.parse(localStorage.listItem);
  listItemArray.push(listItem);
  localStorage.listItem = JSON.stringify(listItemArray);
}

function displayListItem() {
  if (localStorage.listItem !== undefined) {
    let listItemArray = JSON.parse(localStorage.listItem);

    for (let list of listItemArray) {
      const item = document.createElement("div");
      item.innerText = list.list;
    }
  }
}

window.addEventListener("load", onLoadHandler);
