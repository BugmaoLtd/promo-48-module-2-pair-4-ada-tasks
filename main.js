"use strict";

const inputTask = document.querySelector(".js-newTaskInput");
const addBtn = document.querySelector(".js-taskBtn");
const list = document.querySelector(".js-task");


const handleClick = (event) => {
  event.preventDefault();
  const newTaskInputValue = inputTask.value;
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
    list.innerHTML += `<li class="tachado"><input type="checkbox" id=""> ${task.name}</li>`;
}

const tachado = document.querySelector(".tachado");


if (tasks.completed === true) {
    tachado.classList.add("through"); 
    console.log(through); 
}