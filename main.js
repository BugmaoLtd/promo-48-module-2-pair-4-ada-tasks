"use strict";

//

const inputTask = document.querySelector(".js-newTaskInput");
const addBtn = document.querySelector(".js-taskBtn");
const list = document.querySelector(".js-task");

const tasks = [
  { name: "Recoger setas en el campo", completed: true, id: 1 },
  { name: "Comprar pilas", completed: true, id: 2 },
  { name: "Poner una lavadora de blancos", completed: true, id: 3 },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false,
    id: 4,
  },
];

for (const task of tasks) {
  if (task.completed === true) {
    list.innerHTML += `<li class="through"><input type="checkbox" id="${task.id}">${task.name}</li>`;
  } else {
    list.innerHTML += `<li><input type="checkbox" id="${task.id}">${task.name}</li>`;
  }
}

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

  const findId = tasks.find((task) => {
    return task.id === parseInt(taskId);
  });

  // Busca la tarea que tenga el id `taskId` en el array `tasks`
  // Una vez que has obtenido la tarea, actualiza la propiedad `completed`
  // Pinta de nuevo las tareas en el html
};

list.addEventListener("change", handleClickList);

/*Cuando la usuaria haga click en el boton Buscar, 
recogemos los elementos del array que respondan al siguiente criterio,
que el contenido del texto de la tarea, incluye la palabra del valor del input
los pintamos en una lista
*/

const searchInput = document.querySelector(".search-field");
const searchBtn = document.querySelector(".searchBtn");
const listFilter = document.querySelector(".js-filter");

const handleClick2 = (ev) => {
  ev.preventDefault();
  const tasksFilter = tasks.filter((task) => {
    return task.name.includes(searchInput.value);
  });
  tasksFilter();
};

searchBtn.addEventListener("click", handleClick2);

for (const taskFilter of tasksFilter) {
  listFilter.innerHTML += `<li>${taskFilter}</li>`;
}

/* Seleccionar el input de nueva tarea el boton de agregar y el ul de la lista
cuando la usuaria hace click en Agregar
recogemos el valor del input
lo pintamos en la lista
Si el checkbox esta marcado: la tarea se tacha
Si completed === true /añade la clase through
*/
