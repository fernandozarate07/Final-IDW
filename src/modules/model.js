// logica del observador
const observers = [];

function addObserver(observer) {
  observers.push(observer);
} //añade funcion observadora a la lista

function notify(data) {
  observers.forEach((obs) => {
    obs(data);
  }); //ejecuta los observadores y les pasa data como parametro
}
// loader
function showLoader() {
  document.querySelector(".loaderContainer").style.display = "flex";
}

function hideLoader() {
  document.querySelector(".loaderContainer").style.display = "none";
}
// peticion a Api
async function getData(city) {
  const key = "7GJBTC4HB5EX8LYURPUN3CZEY";
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${key}`;

  showLoader();

  const response = await fetch(url);
  const data = await response.json();

  hideLoader();

  return data;
}

// load home page
async function loadPage() {
  let city = "buenos aires";
  try {
    const response = await getData(city);
    notify(response);
  } catch (error) {
    console.error("Error al inicializar el clima predeterminado:", error);
  }
}
export { addObserver, notify, getData, loadPage, hideLoader };
