import {allProjects} from "../index";
import { addToDo, editHeadingDom } from "./domFunctionality";
import {renderProjects,renderHeading,renderTodos} from "./render";

const createProject = (name, description) => {
    _clearActiveProjects();
    allProjects.push({
        name,
        description,
        toDoList: [],
        active: true,
    })
    createToDo("Default Task", "2020-12-31");
    renderProjects();
    renderHeading();
    renderTodos();
}

const createToDo = (name, dueDate) => {
    activeProject().toDoList.push({
        name,
        dueDate,
        complete: false    
    })
}

function activeProject(){
    let activeProjectArray = allProjects.filter(project => project.active);
    return activeProjectArray[0];
}

function switchActiveProject(index){
    _clearActiveProjects();
    allProjects[index].active = true;
    renderProjects();
    renderHeading();
    renderTodos();
    editHeadingDom.hide();
    addToDo.hide();
}

function deleteProject(index){
    if(allProjects.length>1){
        if(allProjects[index] == activeProject()){
            if(index != 0){
                allProjects[index-1].active = true;
                allProjects.splice(index,1);
            }
            else{
                allProjects[1].active = true;
                allProjects.splice(0,1);
            }
        }
        else{
            allProjects.splice(index,1);
        }
    }
    renderProjects();
    renderHeading();
    renderTodos();
}

function _clearActiveProjects(){
    allProjects.forEach(project => project.active = false);
}

function completeToDo(index){
    activeProject().toDoList[index].complete = true;
}

function incompleteToDo(index){
    activeProject().toDoList[index].complete = false;
}

function deleteToDo(index){
    activeProject().toDoList.splice(index,1);
    renderTodos();
}

function storeMyProjects() {
    window.localStorage.setItem('user', JSON.stringify(allProjects))
}

export {createProject, createToDo, activeProject, switchActiveProject, deleteProject, completeToDo, incompleteToDo, deleteToDo, storeMyProjects};