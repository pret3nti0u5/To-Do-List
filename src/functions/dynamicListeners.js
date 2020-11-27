import {switchActiveProject, deleteProject, completeToDo, incompleteToDo, deleteToDo, storeMyProjects} from "./logic";
import { renderTodos } from "./render";
import { editToDo } from "./domFunctionality";

function createProjectBtnListeners(){
    let projects = document.querySelectorAll(".projects");
    projects.forEach(btn => btn.addEventListener('click', function(e){
        if(e.target.className == "trash-image"){
        } 
        else{
            switchActiveProject(e.target.dataset.value);
            storeMyProjects();
        }
    }))

    let trashImage = document.querySelectorAll(".trash-image");
    trashImage.forEach(deleteBtn => deleteBtn.addEventListener('click', function(e){
        deleteProject(e.target.parentNode.dataset.value);
        storeMyProjects();
    }))
}

function createToDoBtnListeners(){
    let checkbox = document.querySelectorAll(".checkbox");
    checkbox.forEach(btn => btn.addEventListener('click', function(e){
        if(e.target.classList.contains("checked")){
            incompleteToDo(e.target.parentNode.parentNode.dataset.value);
        }
        else{
            completeToDo(e.target.parentNode.parentNode.dataset.value);
        }
        storeMyProjects();
        renderTodos();
    }));

    let taskName = document.querySelectorAll(".task-name");
    taskName.forEach(btn => btn.addEventListener('click', function(e){
        editToDo.show(e.target.parentNode.parentNode.dataset.value);
    }));

    let taskTime = document.querySelectorAll(".task-time");
    taskTime.forEach(btn => btn.addEventListener('click', function(e){
        editToDo.show(e.target.parentNode.parentNode.dataset.value);
    }));

    let taskEdit = document.querySelectorAll(".task-edit");
    taskEdit.forEach(btn => btn.addEventListener('click', function(e){
        editToDo.show(e.target.parentNode.parentNode.dataset.value);
    }));

    let taskDelete = document.querySelectorAll(".task-delete");
    taskDelete.forEach(btn => btn.addEventListener('click', function(e){
        deleteToDo(e.target.parentNode.parentNode.dataset.value);
        storeMyProjects();
    }));

    let editToDoCancelButton = document.querySelectorAll(".edit-todo-cancel-button");
    editToDoCancelButton.forEach(btn => btn.addEventListener('click', function(e){
        editToDo.hide(e.target.parentNode.parentNode.parentNode.dataset.value);
    }));
    
    let editToDoButton = document.querySelectorAll(".edit-todo-button");
    editToDoButton.forEach(btn => btn.addEventListener('click', function(e){
        editToDo.submit(e.target.parentNode.parentNode.parentNode.dataset.value);
    }));
}

export {createProjectBtnListeners, createToDoBtnListeners};