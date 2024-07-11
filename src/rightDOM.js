import { fetchNextThreeDaysData } from "./getDataAPI";
import { getCurrentAndNextDays } from "./date";
import { addImage } from "./addImg";

export function addRightPartDOM() {
  const rightDOM = document.querySelector(".right");
  rightDOM.innerHTML = "";

  const locationP = document.createElement("p");
  locationP.classList.add("locationP");

  const thisWeekP = document.createElement("p");
  thisWeekP.classList.add("thisWeekP");
  thisWeekP.textContent = "Next three days"; // permanent so add here

  const weekDIV = document.createElement("div");
  weekDIV.classList.add("weekDIV");

  rightDOM.appendChild(locationP);
  rightDOM.appendChild(thisWeekP);

  //   Weather card 1
  const card1 = document.createElement("div");
  card1.classList.add("weekCard");

  const card1TextDiv = document.createElement("div");
  card1TextDiv.classList.add("weekCardTextDiv");

  const card1TextDay = document.createElement("p");
  card1TextDay.classList.add("cardTextDay");

  const card1TextTemp = document.createElement("p");
  card1TextTemp.classList.add("cardTextTemp");

  const card1WeatherImg = document.createElement("img");
  card1WeatherImg.classList.add("cardWeatherImg");

  card1TextDiv.appendChild(card1TextDay);
  card1TextDiv.appendChild(card1TextTemp);
  card1.appendChild(card1TextDiv);
  card1.appendChild(card1WeatherImg);
  weekDIV.append(card1);

  //   Weather card 2
  const card2 = document.createElement("div");
  card2.classList.add("weekCard");

  const card2TextDiv = document.createElement("div");
  card2TextDiv.classList.add("weekCardTextDiv");

  const card2TextDay = document.createElement("p");
  card2TextDay.classList.add("cardTextDay");

  const card2TextTemp = document.createElement("p");
  card2TextTemp.classList.add("cardTextTemp");

  const card2WeatherImg = document.createElement("img");
  card2WeatherImg.classList.add("cardWeatherImg");

  card2TextDiv.appendChild(card2TextDay);
  card2TextDiv.appendChild(card2TextTemp);
  card2.appendChild(card2TextDiv);
  card2.appendChild(card2WeatherImg);
  weekDIV.append(card2);

  //   Weather card 3
  const card3 = document.createElement("div");
  card3.classList.add("weekCard");

  const card3TextDiv = document.createElement("div");
  card3TextDiv.classList.add("weekCardTextDiv");

  const card3TextDay = document.createElement("p");
  card3TextDay.classList.add("cardTextDay");

  const card3TextTemp = document.createElement("p");
  card3TextTemp.classList.add("cardTextTemp");

  const card3WeatherImg = document.createElement("img");
  card3WeatherImg.classList.add("cardWeatherImg");

  card3TextDiv.appendChild(card3TextDay);
  card3TextDiv.appendChild(card3TextTemp);
  card3.appendChild(card3TextDiv);
  card3.appendChild(card3WeatherImg);
  weekDIV.append(card3);

  rightDOM.appendChild(weekDIV);

  return {
    locationP,
    card1TextDay,
    card1TextTemp,
    card1WeatherImg,
    card2TextDay,
    card2TextTemp,
    card2WeatherImg,
    card3TextDay,
    card3TextTemp,
    card3WeatherImg,
  };
}

export async function setLeftPartDOMContent() {
  const {
    locationP,
    card1TextDay,
    card1TextTemp,
    card1WeatherImg,
    card2TextDay,
    card2TextTemp,
    card2WeatherImg,
    card3TextDay,
    card3TextTemp,
    card3WeatherImg,
  } = addRightPartDOM();
}

export async function setRightPartDOMContent(cityInput) {
  const nextThreeDays = getCurrentAndNextDays();
  const currentDay = nextThreeDays[0];
  const tomorrow = nextThreeDays[1];
  const dayAfterTomorrow = nextThreeDays[2];
  const dayAfterAfteromorrow = nextThreeDays[3];

  const elements = addRightPartDOM();
  const {
    locationP,
    card1TextDay,
    card1TextTemp,
    card1WeatherImg,
    card2TextDay,
    card2TextTemp,
    card2WeatherImg,
    card3TextDay,
    card3TextTemp,
    card3WeatherImg,
  } = elements;

  const {
    timeHourCardAll,
    city,
    country,
    maxTempCard1,
    minTempCard1,
    conditionCodeCard1,
    maxTempCard2,
    minTempCard2,
    conditionCodeCard2,
    maxTempCard3,
    minTempCard3,
    conditionCodeCard3,
  } = await fetchNextThreeDaysData(cityInput);

  locationP.textContent = city + ", " + country;

  card1TextDay.textContent = tomorrow + ", ";
  card1TextTemp.textContent = `${maxTempCard1} °C / ${minTempCard1} °C`;
  const imgSrc1 = await addImage(conditionCodeCard1, timeHourCardAll);
  card1WeatherImg.src = imgSrc1;

  card2TextDay.textContent = dayAfterTomorrow + ", ";
  card2TextTemp.textContent = `${maxTempCard2} °C / ${minTempCard2} °C`;
  const imgSrc2 = await addImage(conditionCodeCard2, timeHourCardAll);
  card2WeatherImg.src = imgSrc2;

  card3TextDay.textContent = dayAfterAfteromorrow + ", ";
  card3TextTemp.textContent = `${maxTempCard3} °C / ${minTempCard3} °C`;
  const imgSrc3 = await addImage(conditionCodeCard3, timeHourCardAll);
  card3WeatherImg.src = imgSrc3;
}

export function cleanRightDOM() {
  const rightDOM = document.querySelector(".right");
  rightDOM.innerHTML = "";
}
