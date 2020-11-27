import {createProject, activeProject, createToDo, storeMyProjects} from "./logic";
import {renderProjects, renderHeading, renderTodos} from "./render";

const newProjectDom = (() => {
    const addProjectBtn = document.querySelector("#add-project");
    const _addProjectWindowContainer = document.querySelector("#add-project-window-container");
    const addTaskBtn = document.querySelector("#add-project-button");
    const cancelBtn = document.querySelector("#add-project-cancel-button");
    const _projectNameInput = document.querySelector("#project-name");
    const _projectDescriptionInput = document.querySelector("#project-description");

    function show(){
        _addProjectWindowContainer.style.display="flex";
    }

    function hide(){
        _addProjectWindowContainer.style.display="none";
        _clear();
    }

    function _clear(){
        _projectNameInput.value="";
        _projectDescriptionInput.value="";
    }

    function addProject(){
        if(_projectNameInput.value != ""){
            createProject(_projectNameInput.value, _projectDescriptionInput.value);
            hide();
            storeMyProjects();
        }
        else{
            errorMessageDom.show();
        }
    }

    return{
        show,
        hide,
        addProject,
        addProjectBtn,
        addTaskBtn,
        cancelBtn,
    };
})();

const editHeadingDom = (() => {
    const _projectInfoContainer = document.querySelector("#project-info-container");
    const _editProjectInfoContainer = document.querySelector("#edit-project-info-container");
    const _editProjectName = document.querySelector("#edit-project-name");
    const _editProjectDescription = document.querySelector("#edit-project-description");
    const editProjectInfoIcon = document.querySelector("#edit-project-info-icon");
    const editProjectButton = document.querySelector("#edit-project-button");
    const editProjectCancelButton = document.querySelector("#edit-project-cancel-button");

    function show(){
        _projectInfoContainer.style.display = "none";
        _editProjectInfoContainer.style.display = "flex";
    }

    function submit(){
        activeProject().name = _editProjectName.value;
        activeProject().description = _editProjectDescription.value;
        hide();
        renderProjects();
        renderHeading();
        storeMyProjects();
    }

    function hide(){
        _editProjectInfoContainer.style.display = "none";
        _projectInfoContainer.style.display = "flex";
    }

    return{
        show,
        hide,
        submit,
        editProjectInfoIcon,
        editProjectButton,
        editProjectCancelButton,
    }
})();

const editToDo = (() => {
    function show(index){
        const _leftToDo = document.querySelectorAll(".left-to-do");
        const _rightToDo = document.querySelectorAll(".right-to-do");
        const _leftToDoEdit = document.querySelectorAll(".left-to-do-edit");
        const _rightToDoEdit = document.querySelectorAll(".right-to-do-edit");
        const _toDoName = document.querySelectorAll(".to-do-name");
        const _toDoDate = document.querySelectorAll(".to-do-date");

        _leftToDo[index].style.display="none";
        _rightToDo[index].style.display="none";
        _leftToDoEdit[index].style.display="flex";
        _rightToDoEdit[index].style.display="flex";

        _toDoName[index].value = activeProject().toDoList[index].name;
        _toDoDate[index].value = activeProject().toDoList[index].dueDate;
    }
    
    function hide(index){
        const _leftToDo = document.querySelectorAll(".left-to-do");
        const _rightToDo = document.querySelectorAll(".right-to-do");
        const _leftToDoEdit = document.querySelectorAll(".left-to-do-edit");
        const _rightToDoEdit = document.querySelectorAll(".right-to-do-edit");
        _leftToDo[index].style.display="flex";
        _rightToDo[index].style.display="flex";
        _leftToDoEdit[index].style.display="none";
        _rightToDoEdit[index].style.display="none";
    }

    function submit(index){
        const _toDoName = document.querySelectorAll(".to-do-name");
        const _toDoDate = document.querySelectorAll(".to-do-date");
        if(_toDoName[index].value == "" || _toDoDate[index].value == ""){
            errorMessageDom.show();
        }
        else{
            activeProject().toDoList[index].name = _toDoName[index].value;
            activeProject().toDoList[index].dueDate = _toDoDate[index].value;
            renderTodos();
            storeMyProjects();
        }
    }

    return{
        show,
        hide,
        submit,
    }
})();

const addToDo = (() => {
    const addTask = document.querySelector("#add-task");
    const addToDoButton = document.querySelector(".add-todo-button");
    const addToDoCancelButton = document.querySelector(".add-todo-cancel-button");
    const _toDoAdd = document.querySelector(".to-do-add");
    const _addToDoName = document.querySelector(".add-to-do-name");
    const _addToDoDate = document.querySelector(".add-to-do-date");

    function show(){
        _addToDoName.value = "Default Task";
        _addToDoDate.value = "2020-12-31";
        _toDoAdd.style.display = "flex";
        addTask.style.display = "none";
    }

    function hide(){
        _toDoAdd.style.display = "none";
        addTask.style.display = "flex";
        _clear();
    }

    function _clear(){
        _addToDoName.value = "";
        _addToDoDate.value = "";
    }

    function submit(){
        if(_addToDoName.value == "" || _addToDoDate.value == ""){
            errorMessageDom.show();
        }
        else{
            createToDo(_addToDoName.value, _addToDoDate.value);
            hide();
            renderTodos();
            storeMyProjects();
        }
    }

    return{
        addTask,
        addToDoButton,
        addToDoCancelButton,
        show,
        hide,
        submit,
    }
})();

const errorMessageDom = (() => {
    const _errorMessageContainer = document.querySelector("#error-message-container");
    const errorMessageButton = document.querySelector("#error-message-button");

    function show(){
        _errorMessageContainer.style.display = "flex";
    }

    function hide(){
        _errorMessageContainer.style.display = "none";
    }

    return{
        show,
        hide,
        errorMessageButton,
    }
})();

export {newProjectDom, editHeadingDom, editToDo, addToDo, errorMessageDom};