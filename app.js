//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//event listerners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

//functions
function addTodo(event) {
  event.preventDefault();
  if(todoInput.value == ""){
    alert("Du måste göra något");
  }
  else {
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  const newTodo = document.createElement("li");

  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  const completedButton = document.createElement("button");
  completedButton.innerHTML = "<i class=\"fas fa-check\"></i>";
  completedButton.classList.add("completed-btn");
  completedButton.setAttribute("title", "Avklarad"); 
  todoDiv.appendChild(completedButton);

  const trashButton = document.createElement("button");
  trashButton.innerHTML = "<i class=\"fas fa-trash\"></i>";
  trashButton.classList.add("trash-btn");
  trashButton.setAttribute("title", "Ta bort"); 
  todoDiv.appendChild(trashButton);

  todoList.appendChild(todoDiv);


  todoInput.value = "";
  }
}

function deleteCheck(event) {
    const item = event.target;

    if(item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        todo.remove();
    }

    if(item.classList[0] === "completed-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}
