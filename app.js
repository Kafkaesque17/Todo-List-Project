//Selecting 
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// Adding EventListener
todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click",deletecheck);
filterOption.addEventListener("click",filterTodo);

//Function
function addTodo(event){

event.preventDefault();

 //todo Div
const todoDiv = document.createElement("div");
todoDiv.classList.add("todo");

//creating li
const newTodo = document.createElement("li");
newTodo.innerText = todoInput.value;
newTodo.classList.add("todo-items");
todoDiv.appendChild(newTodo);


//Complete Button
const completedButton = document.createElement("button");
completedButton.innerHTML = `<i class="fas fa-check"></i>`;
completedButton.classList.add("complete-btn");
todoDiv.appendChild(completedButton);

//Trash Button
const trashButton = document.createElement("button");
trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
trashButton.classList.add("trash-btn");
todoDiv.appendChild(trashButton);

//appending to list
todoList.appendChild(todoDiv);

console.log(todoList);

todoInput.value = "";

}


//DELETE CHECK TODO ITEMS
function deletecheck(e) {
  const items =  e.target;

  // REMOVING TODO
  if(items.classList[0] === "trash-btn"){
    const tod =items.parentElement;
    tod.classList.add("fall");
    tod.addEventListener("transitionend",function (){
        tod.remove();
    })
    
  }

  // COMPLETED TODO
  if(items.classList[0] === "complete-btn"){
    const todo =items.parentElement;
    todo.classList.toggle('completed');
  }
}


//FILTER TODO ITEMS 
function filterTodo(e) {
todos = todoList.childNodes;
const selected = e.target.value;

todos.forEach(function(todo){

  switch(selected){

    case "all":
      if(todo.classList === "all"){

       console.log("AKK");
      }
      case "completed":
        if(todo.classList === "completed"){
  
          console.log(todo.innerText);
        }
        break;

      case "uncompleted":
            if(todo.classList === "completed"){
      break;
             
            }
            else{
              console.log(todo.innerText);
            }


  }

  

})
  
  
}



    


