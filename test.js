let addButtonElement;
let inputValueElement;
let myToDoListElement;

let toDoList = [];

function onLoadHandler() {
  addButtonElement = document.getElementById("add-button");
  inputValueElement = document.getElementById("input-field");
  myToDoListElement = document.getElementById("myToDoList");

  addButtonElement.addEventListener("click", addToDoItemElement);

  // Load all the items from local storage on page load
  if (localStorage.getItem("toDoList")) {
    toDoList = JSON.parse(localStorage.getItem("toDoList"));
    renderToDoList();
  }

  function renderToDoList() {
    // If no this code will get the items back again
    myToDoListElement.innerHTML = "";

    toDoList.forEach((item, index) => {
      const listContainerElement = document.createElement("div");
      const li = document.createElement("li");
      const toDoText = document.createTextNode(item);
      li.appendChild(toDoText);
      listContainerElement.appendChild(li);
      myToDoListElement.appendChild(listContainerElement);

      //create mark button
      const markButton = document.createElement("button");
      markButton.innerHTML = "✔️";
      markButton.addEventListener("click", () => markElement(index));
      listContainerElement.appendChild(markButton);

      //create delete button
      const deleteButton = document.createElement("button");
      deleteButton.innerHTML = "❌";
      deleteButton.addEventListener("click", () => removeElement(index));
      listContainerElement.appendChild(deleteButton);
    });
  }

  function addToDoItemElement() {
    if (inputValueElement.value.length > 0) {
      const toDoText = inputValueElement.value;
      toDoList.push(toDoText);
      renderToDoList();
      inputValueElement.value = "";

      saveToDoListToLocalStorage();
    }
  }

  function saveToDoListToLocalStorage() {
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
  }

  function markElement(index) {
    const element = myToDoListElement.children[index];
    element.style.textDecoration = "line-through";
    saveToDoListToLocalStorage();
  }

  function removeElement(index) {
    toDoList.splice(index, 1);
    renderToDoList();
    saveToDoListToLocalStorage();
  }
}

window.addEventListener("load", onLoadHandler);

//The coding I used "forEach()"

//In my code, the forEach() method is being used to iterate over the toDoList array and render each to-do item on the screen.
//The provided function takes two parameters: item and index. item refers to the current element being processed
//Which is an object that contains the text and state(marked or not) of a to-do item. index refers to the index of the current element in the array.
