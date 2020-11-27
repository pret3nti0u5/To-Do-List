import "./styles/global.css";
import "./functions/staticListeners";
import {createProject, createToDo} from "./functions/logic";
import { renderHeading, renderProjects, renderTodos } from "./functions/render";

let allProjects = [];
if(localStorage.getItem('user') == null){
    createProject("Example Project","An Example Project");
    createToDo("A Simple To-Do App", "2020-12-31");
    createToDo("Lacks a lot of quality of life features right now", "2020-12-31");
    createToDo("But stay posted, there is more to come :)", "2020-12-31");
    renderTodos();
}
else {
    allProjects = JSON.parse(window.localStorage.getItem('user'));
    renderProjects();
    renderHeading();
    renderTodos();
}

export {allProjects};
