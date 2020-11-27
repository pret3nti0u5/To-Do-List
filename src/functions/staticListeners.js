import {editHeadingDom, newProjectDom, addToDo, errorMessageDom} from "./domFunctionality";

newProjectDom.addProjectBtn.addEventListener('click', newProjectDom.show);
newProjectDom.cancelBtn.addEventListener('click', newProjectDom.hide);
newProjectDom.addTaskBtn.addEventListener('click', newProjectDom.addProject);

editHeadingDom.editProjectInfoIcon.addEventListener('click', editHeadingDom.show);
editHeadingDom.editProjectButton.addEventListener('click', editHeadingDom.submit);
editHeadingDom.editProjectCancelButton.addEventListener('click', editHeadingDom.hide);

addToDo.addTask.addEventListener('click', addToDo.show);
addToDo.addToDoCancelButton.addEventListener('click', addToDo.hide);
addToDo.addToDoButton.addEventListener('click', addToDo.submit);

errorMessageDom.errorMessageButton.addEventListener('click', errorMessageDom.hide);