"use strict";

const inputTask = document.querySelector(".js-newTaskInput");
const addBtn = document.querySelector(".js-taskBtn");
const list = document.querySelector(".js-task");

const handleClick = (event) => {
  event.preventDefault();
  const newTaskInputValue = inputTask.value;
  list.innerHTML += newTaskInputValue;
};

addBtn.addEventListener("click", handleClick);

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

/* Seleccionar el input de nueva tarea el boton de agregar y el ul de la lista
cuando la usuaria hace click en Agregar
recogemos el valor del input
lo pintamos en la lista
Si el checkbox esta marcado: la tarea se tacha
Si completed === true /añade la clase through

*/

for (const task of tasks) {
  if (task.completed === true) {
    console.log(task);
    list.innerHTML += `<li class="through"><input type="checkbox" id="">${task.name}</li>`;
  } else {
    list.innerHTML += `<li><input type="checkbox" id="">${task.name}</li>`;
  }
}

const handleClickList = (event) => {
  const taskId = parseInt(event.target.id); // Obtengo el id del checkbox clickado por la usuaria
  if (!taskId) return; // Si no ha pulsado en el checkbox, no queremos hacer nada y salimos de la función

  // Busca la tarea que tenga el id `taskId` en el array `tasks`
  // Una vez que has obtenido la tarea, actualiza la propiedad `completed`
  // Pinta de nuevo las tareas en el html
};

list.addEventListener("click", handleClickList);
