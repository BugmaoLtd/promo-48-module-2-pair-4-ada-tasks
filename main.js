"use strict";

const inputTask = document.querySelector(".js-newTaskInput");
const addBtn = document.querySelector(".js-taskBtn");
const list = document.querySelector(".js-task");

const handleClick = (event) => {
  event.preventDefault();
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
lo pintamos en la lista*/

for (const task of tasks) {
  // pintar la tarea en la lista
}
