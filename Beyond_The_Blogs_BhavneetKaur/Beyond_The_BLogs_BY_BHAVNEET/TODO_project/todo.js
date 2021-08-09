const todoInp=document.querySelector(".todo-input");
const todoButton=document.querySelector(".todo-button");
const todoButton2=document.querySelector(".todo-button2");
const todoList=document.querySelector(".todo-list");
const filterOption=document.querySelector(".filter-todo");
const deleteAll=document.querySelector(".deleteAll");

document.addEventListener('DOMContentLoaded',getTodos)
todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click",deleteCheck);
todoList.addEventListener("click",completeCheck);
todoList.addEventListener("click",editCheck);
filterOption.addEventListener("click",filterTodo);
// deleteAll.addEventListener("click",deleteAllData);


function addTodo(event){
    event.preventDefault();// y imp?
    const todoDiv=document.createElement("div");
    todoDiv.classList.add("todo");
    const newTodo=document.createElement("li");
    newTodo.innerText=todoInp.value;
    newTodo.classList.add("todo-item");
    todoDiv.append(newTodo);
    //add todo to local storage:
    saveLocalTodos(todoInp.value);
    const completedBtn=document.createElement("button");
    completedBtn.innerHTML='<i class="fas fa-check"></i>';
    completedBtn.classList.add("complete-btn");
    todoDiv.append(completedBtn);
    const trashBtn=document.createElement("button");
    trashBtn.innerHTML='<i class="fas fa-trash"></i>';
    trashBtn.classList.add("trash-btn");
    todoDiv.append(trashBtn);

    const editBtn=document.createElement("button");
    editBtn.innerHTML='<i class="fas fa-edit"></i>';
    editBtn.classList.add("edit-btn");
    todoDiv.append(editBtn);
    todoList.append(todoDiv);

    //at last 
    document.querySelector('.todo-input').value="";
    
}
//delete fn
function deleteCheck(e){
const item=e.target;
if(item.classList[0]==="trash-btn"){
const todo=item.parentElement;
todo.classList.add("fall");
 removeLocalTodos(todo);
todo.addEventListener('transitionend',function(){
todo.remove();

});
    
}}
//complete fn
function completeCheck(e){
    const item=e.target;
    if(item.classList[0]==="complete-btn"){
    const todo=item.parentElement;
        todo.classList.toggle("completed");
    }
}
//edit check
function editCheck(e){
    const item=e.target;
    if(item.classList[0]==="edit-btn"){
    const todo=item.parentElement.children[0].innerText;
    
        todoInp.value=todo;
        todoButton2.style.display="block";
        todoButton.style.display="none";
        todoButton2.addEventListener("click",function(e){
            e.preventDefault();
            const newTodoval=todoInp.value;
            
            item.parentElement.children[0].innerText=newTodoval;
            
        todos=JSON.parse(localStorage.getItem('todos'));
        const reqInd=todos.indexOf(todo);
        todos[reqInd]=newTodoval;
            
        
            localStorage.setItem("todos",JSON.stringify(todos));
            
            document.querySelector('.todo-input').value="";
            todoButton2.style.display="none";
            todoButton.style.display="block";
            
        });

        
    }
}

function filterTodo(e){
const todos=todoList.childNodes;
todos.forEach(function(todo){

switch(e.target.value){
    case "all":
        todo.style.display="flex";
        break;
    case "completed":
        if(todo.classList.contains("completed")){
            todo.style.display="flex";
        }
        else{
            todo.style.display="none";
        }
        break;
    case "uncompleted":
        if(!todo.classList.contains("completed")){
            todo.style.display="flex";
        }
        else{
            todo.style.display="none";
        }
        break;
}
});
}
//saving it to local storage:
function saveLocalTodos(todo){
    //check-- do i have already things there?
    let todos;
    if(localStorage.getItem('todos')===null){
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem('todos'));
        
    }
    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos));
}
function getTodos(){
    let todos;
    if(localStorage.getItem('todos')===null){
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem('todos'));
        
    }
    todos.forEach(function(todo){
        const todoDiv=document.createElement("div");
    todoDiv.classList.add("todo");
    const newTodo=document.createElement("li");
    newTodo.innerText=todo;
    newTodo.classList.add("todo-item");
    todoDiv.append(newTodo);
    //add todo to local storage:
    //saveLocalTodos(todoInp.value);
    const completedBtn=document.createElement("button");
    completedBtn.innerHTML='<i class="fas fa-check"></i>';
    completedBtn.classList.add("complete-btn");
    todoDiv.append(completedBtn);
    const trashBtn=document.createElement("button");
    trashBtn.innerHTML='<i class="fas fa-trash"></i>';
    trashBtn.classList.add("trash-btn");
    todoDiv.append(trashBtn);

    const editBtn=document.createElement("button");
    editBtn.innerHTML='<i class="fas fa-edit"></i>';
    editBtn.classList.add("edit-btn");
    todoDiv.append(editBtn);
    todoList.append(todoDiv);
    });
}
function removeLocalTodos(todo){
    let todos;
    if(localStorage.getItem('todos')===null){
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem('todos'));
        
    }
    const todoIndex=todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex),1);
    localStorage.setItem("todos",JSON.stringify(todos));
    
}

// function deleteAllData(){
//     let todos;
//     if(localStorage.getItem('todos')===null){
//         todos=[];
//     }
//     else{
//         todos=JSON.parse(localStorage.getItem('todos'));
//         todos=[];
//     }
// }

deleteAll.addEventListener("click",function(){
   
       
            let todos=JSON.parse(localStorage.getItem('todos'));
            todos=[];
            localStorage.setItem("todos",JSON.stringify(todos));
        
});