import { addObserver, notify, getData, loadPage, hideLoader } from "./model.js"; // importamos las funciones del modelo
import { renderMain } from "./vision.js"; // importamos la funcion de vision

// carga la pagina de inicio
loadPage();

// añade a renderMain como observador
addObserver(renderMain);

// validacion de los datos del input

const formNewCity = document.querySelector(".header__search");
formNewCity.addEventListener("submit", (event) => {
  event.preventDefault();

  const inpNewCity = document.querySelector(".header__input");
  const nameNewCity = inpNewCity.value.trim();
  const errorMessage = document.querySelector(".header__errorSearch");

  if (nameNewCity === "" || !isNaN(nameNewCity)) {
    errorMessage.textContent = "Please choose a valid option";
    errorMessage.classList.add("visible");
  } else {
    errorMessage.textContent = "";
    errorMessage.classList.remove("visible");
    inpNewCity.value = "";

    // Hace una nueva peticion con los datos previamente validados
    getData(nameNewCity)
      .then((response) => {
        notify(response);
      })
      .catch(() => {
        errorMessage.textContent = "Error, invalid city";
        errorMessage.classList.add("visible");
        hideLoader();
      });
  }
});
