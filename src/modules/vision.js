// observador RenderMain
function renderMain(data) {
  // body aparience
  const body = document.querySelector(".body");
  body.classList.remove("body-day", "body-night");
  const datetime = data.currentConditions.datetime;
  if (datetime <= data.currentConditions.sunset && datetime >= data.currentConditions.sunrise) {
    body.classList.add("body-day");
  } else {
    body.classList.add("body-night");
  }
  // name of place
  const name = document.querySelector(".main__city");
  name.textContent = data.address.toUpperCase();
  // temperature
  const celcius = document.querySelector(".main__celcius");
  celcius.textContent = "°C";
  const temperature = document.querySelector(".main__temperature");
  temperature.textContent = data.currentConditions.temp;
  //   icon
  const icon = document.querySelector(".main__icon");
  const iconName = data.currentConditions.icon;
  icon.classList.remove(
    "fa-solid",
    "fa-moon",
    "fa-sun",
    "fa-cloud",
    "fa-cloud-rain",
    "fa-snowflake",
    "fa-bolt",
    "fa-wind",
    "fa-question-circle",
    "fa-cloud-sun",
    "fa-cloud-moon"
  );

  switch (iconName) {
    case "clear-night":
      icon.classList.add("fa-solid", "fa-moon");
      break;
    case "clear-day":
      icon.classList.add("fa-solid", "fa-sun");
      break;
    case "cloudy":
      icon.classList.add("fa-solid", "fa-cloud");
      break;
    case "rain":
      icon.classList.add("fa-solid", "fa-cloud-rain");
      break;
    case "snow":
      icon.classList.add("fa-solid", "fa-snowflake");
      break;
    case "thunder":
      icon.classList.add("fa-solid", "fa-bolt");
      break;
    case "wind":
      icon.classList.add("fa-solid", "fa-wind");
      break;
    case "partly-cloudy-day":
      icon.classList.add("fa-solid", "fa-cloud-sun");
      break;
    case "partly-cloudy-night":
      icon.classList.add("fa-solid", "fa-cloud-moon");
      break;
    default:
      icon.classList.add("fa-solid", "fa-question-circle");
  }
  // condition
  const condition = document.querySelector(".main__condition");
  condition.textContent = data.currentConditions.conditions;
  // day date
  const day = document.querySelector(".main__dayDate");
  day.textContent = data.days[0].datetime;
  const descriptions = document.querySelector(".main__descriptions");
  descriptions.textContent = data.description;
}
export { renderMain };
