import { getTodayDate, getCurrentAndNextDays } from "./date.js";
import { fetchCurrentData } from "./getDataAPI.js";
import { addImage } from "./addImg.js";

// Function to create and append DOM elements
export function addLeftPartDOM() {
  const leftDOM = document.querySelector(".leftChangableDOM");
  leftDOM.innerHTML = ""; // Clear previous elements

  const cityP = document.createElement("p");
  cityP.classList.add("cityLeftP");

  const weatherImg = document.createElement("img");
  weatherImg.classList.add("mainWeatherImg");

  const weatherStateP = document.createElement("p");
  weatherStateP.classList.add("weatherStateP");

  const tempP = document.createElement("p");
  tempP.classList.add("tempLeftP");

  const dateP = document.createElement("p");
  dateP.classList.add("dateLeftP");

  leftDOM.appendChild(weatherImg);
  leftDOM.appendChild(cityP);
  leftDOM.appendChild(tempP);
  leftDOM.appendChild(weatherStateP);
  leftDOM.appendChild(dateP);

  return { weatherImg, cityP, tempP, weatherStateP, dateP };
}

// Function to set content for the DOM elements
export async function setLeftPartDOMContent(cityInput) {
  const todayDate = getTodayDate();
  const nextThreeDays = getCurrentAndNextDays();
  const currentDay = nextThreeDays[0];

  const elements = addLeftPartDOM();

  const { weatherImg, cityP, tempP, weatherStateP, dateP } = elements;

  cityP.textContent = cityInput;
  dateP.innerHTML = `${currentDay},<br>${todayDate}`;

  const { weatherConditionText, tempCelsius } = await fetchCurrentData(
    cityInput
  );
  weatherStateP.textContent = weatherConditionText;
  tempP.textContent = `${tempCelsius} °C`;

  const { weatherConditionID, localTimeHour } = await fetchCurrentData(
    cityInput
  );
  const imgSrc = await addImage(weatherConditionID, localTimeHour);
  weatherImg.src = imgSrc;
}

// Function to remove all child elements from the parent container
export function cleanLeftDOM() {
  const leftDOM = document.querySelector(".leftChangableDOM");
  leftDOM.innerHTML = ""; // This effectively removes all child elements
}
