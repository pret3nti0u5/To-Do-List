import {allProjects} from "../index";
import {activeProject} from "./logic";
import {createProjectBtnListeners, createToDoBtnListeners} from "./dynamicListeners";
import trashImageDarkSrc from "../assets/imgs/icons8-trash-1-dark.svg";
import trashImageWhiteSrc from "../assets/imgs/icons8-trash-1-white.svg";
import taskEditSrc from "../assets/imgs/pen.svg";
import moment from 'moment';

const projectContainer = document.querySelector(".project-container");
const projectNameMain = document.querySelector("#project-name-main");
const projectDescriptionMain = document.querySelector("#project-description-main");
const editProjectName = document.querySelector("#edit-project-name");
const editProjectDescription = document.querySelector("#edit-project-description");
const tasksContainer = document.querySelector("#tasks-container");

function renderProjects(){
    _clearProjects();
    allProjects.forEach((project,index) => {
        const projects = document.createElement("div");
        projects.dataset.value = index;
        projects.classList.add("projects");
        if(project.active){
            projects.classList.add("active");
        }
        projects.textContent = project.name;

        const trashImage = document.createElement("img");
        trashImage.classList.add("trash-image");
        trashImage.src = project.active?trashImageWhiteSrc:trashImageDarkSrc;
        
        projects.appendChild(trashImage);
        projectContainer.appendChild(projects);
    })
    createProjectBtnListeners();
}

function _clearProjects(){
    projectContainer.innerHTML = "";
}

function renderHeading(){
    projectNameMain.textContent = activeProject().name;
    projectDescriptionMain.textContent = activeProject().description;
    editProjectName.value = activeProject().name;
    editProjectDescription.value = activeProject().description;
}

function renderTodos(){
    _clearToDos();
    activeProject().toDoList.forEach((item,index) => {
        const toDo = document.createElement("div");
        toDo.classList.add("to-do");
        toDo.dataset.value = index;

        const leftToDo = document.createElement("div");
        leftToDo.classList.add("left-to-do");

        const checkbox = document.createElement("div");
        checkbox.classList.add("checkbox");
        if(item.complete){
            checkbox.classList.add("checked");
        }
        leftToDo.appendChild(checkbox);

        const taskName = document.createElement("div");
        taskName.classList.add("task-name");
        taskName.textContent = item.name;
        leftToDo.appendChild(taskName);

        toDo.appendChild(leftToDo);

        const leftToDoEdit = document.createElement("div");
        leftToDoEdit.classList.add("left-to-do-edit");
        
        const toDoName = document.createElement("input");
        toDoName.classList.add("to-do-name");
        toDoName.type = "text";
        toDoName.placeholder = "To-Do Name";

        leftToDoEdit.appendChild(toDoName);
        toDo.appendChild(leftToDoEdit);

        const rightToDo = document.createElement("div");
        rightToDo.classList.add("right-to-do");

        const taskTime = document.createElement("div");
        taskTime.classList.add("task-time");
        taskTime.textContent = moment(item.dueDate, "YYYY-MM-DD").fromNow();
        rightToDo.appendChild(taskTime);

        const taskEdit = document.createElement("img");
        taskEdit.classList.add("task-edit");
        taskEdit.src = taskEditSrc;
        rightToDo.appendChild(taskEdit);

        const taskDelete = document.createElement("img");
        taskDelete.classList.add("task-delete");
        taskDelete.src = trashImageDarkSrc;
        rightToDo.appendChild(taskDelete);

        toDo.appendChild(rightToDo);

        const rightToDoEdit = document.createElement("div");
        rightToDoEdit.classList.add("right-to-do-edit");

        const toDoDate = document.createElement("input");
        toDoDate.classList.add("to-do-date");
        toDoDate.type = "date";
        rightToDoEdit.appendChild(toDoDate);

        const editToDoButtonContainer = document.createElement("div");
        editToDoButtonContainer.classList.add("edit-todo-button-container");

        const editToDoButton = document.createElement("p");
        editToDoButton.classList.add("edit-todo-button");
        editToDoButton.textContent = "Submit";
        editToDoButtonContainer.appendChild(editToDoButton);

        const editToDoCancelButton = document.createElement("p");
        editToDoCancelButton.classList.add("edit-todo-cancel-button");
        editToDoCancelButton.textContent = "Cancel";
        editToDoButtonContainer.appendChild(editToDoCancelButton);

        rightToDoEdit.appendChild(editToDoButtonContainer);
        toDo.appendChild(rightToDoEdit);
        tasksContainer.appendChild(toDo);
    });
    createToDoBtnListeners();
}

function _clearToDos(){
    tasksContainer.innerHTML = "";
}

export {renderProjects,renderHeading,renderTodos};    