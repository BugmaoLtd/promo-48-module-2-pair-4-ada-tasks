"use strict";

//

const inputTask = document.querySelector(".js-newTaskInput");
const addBtn = document.querySelector(".js-taskBtn");
const list = document.querySelector(".js-task");

const handleClick = (event) => {
  event.preventDefault();
  const newTaskInputValue = inputTask.value;
  list.innerHTML += `<li><input type="checkbox" name="task" id="" completed="">${newTaskInputValue}</li>`;
};

addBtn.addEventListener("click", handleClick);

/*Cuando la usuaria marque la tarea como completada (change)
la tarea debe mostrarse como completada

*/
const handleClickList = (event) => {
  const taskId = parseInt(event.target.id); // Obtengo el id del checkbox clickado por la usuaria
  if (!taskId) return; // Si no ha pulsado en el checkbox, no queremos hacer nada y salimos de la función

  // Busca la tarea que tenga el id `taskId` en el array `tasks`
  // Una vez que has obtenido la tarea, actualiza la propiedad `completed`
  // Pinta de nuevo las tareas en el html
};

list.addEventListener("click", handleClickList);

const searchInput = document.querySelector(".search-field");
const searchBtn = document.querySelector("searchBtn");

const contentFilter = (content) => {
  return content;
};

searchBtn.addEventListener("click", contentFilter);

/* Seleccionar el input de nueva tarea el boton de agregar y el ul de la lista
cuando la usuaria hace click en Agregar
recogemos el valor del input
lo pintamos en la lista
Si el checkbox esta marcado: la tarea se tacha
Si completed === true /añade la clase through
*/

// for (const task of tasks) {
//   if (task.completed === true) {
//     list.innerHTML += `<li class="through"><input type="checkbox" id="">${task.name}</li>`;
//   } else {
//     list.innerHTML += `<li><input type="checkbox" id="">${task.name}</li>`;
//   }
// }
