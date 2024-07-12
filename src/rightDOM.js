import { fetchNextThreeDaysData } from "./getDataAPI";
import { fetchCurrentData } from "./getDataAPI.js";
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

  rightDOM.appendChild(locationP);
  rightDOM.appendChild(thisWeekP);

  const weekDIV = document.createElement("div");
  weekDIV.classList.add("weekDIV");

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

  const todayHighlightsP = document.createElement("p");
  todayHighlightsP.classList.add("todayHighlightsP");

  const todayHighlightsDIV = document.createElement("div");
  todayHighlightsDIV.classList.add("todayHighlightsDIV");

  // UV card
  const cardUV = document.createElement("div");
  cardUV.classList.add("todayHighlightsCardUV");
  const cardUVp = document.createElement("p");
  cardUVp.classList.add("todayHighlightsTitle");
  cardUVp.textContent = "UV Index";
  const cardUVvalue = document.createElement("p");
  cardUVvalue.classList.add("todayHighlightsValue");
  const sunscreenReminder = document.createElement("p");
  sunscreenReminder.classList.add("sunscreenReminder");
  cardUV.appendChild(cardUVp);
  cardUV.appendChild(cardUVvalue);
  cardUV.appendChild(sunscreenReminder);
  todayHighlightsDIV.appendChild(cardUV);

  // Feels like
  const cardFeelsLike = document.createElement("div");
  cardFeelsLike.classList.add("todayHighlightsCard");
  const cardFeelsLikep = document.createElement("p");
  cardFeelsLikep.classList.add("todayHighlightsTitle");
  cardFeelsLikep.textContent = "Feels like..";
  const feelsLikeValue = document.createElement("p");
  feelsLikeValue.classList.add("todayHighlightsValue");
  cardFeelsLike.appendChild(cardFeelsLikep);
  cardFeelsLike.appendChild(feelsLikeValue);
  todayHighlightsDIV.appendChild(cardFeelsLike);

  // Pressure
  const cardPressure = document.createElement("div");
  cardPressure.classList.add("todayHighlightsCard");
  const cardPressureP = document.createElement("p");
  cardPressureP.classList.add("todayHighlightsTitle");
  cardPressureP.textContent = "Pressure:";
  const cardPressureValue = document.createElement("p");
  cardPressureValue.classList.add("todayHighlightsValue");
  cardPressure.appendChild(cardPressureP);
  cardPressure.appendChild(cardPressureValue);
  todayHighlightsDIV.appendChild(cardPressure);

  // Wind
  const cardWind = document.createElement("div");
  cardWind.classList.add("todayHighlightsCard");
  const cardWindP = document.createElement("p");
  cardWindP.classList.add("todayHighlightsTitle");
  cardWindP.textContent = "Wind:";
  const cardWindValue = document.createElement("p");
  cardWindValue.classList.add("todayHighlightsValue");
  cardWind.appendChild(cardWindP);
  cardWind.appendChild(cardWindValue);
  todayHighlightsDIV.appendChild(cardWind);

  // Air quality:
  const cardAirQuality = document.createElement("div");
  cardAirQuality.classList.add("todayHighlightsCard");
  const cardAirQualityP = document.createElement("p");
  cardAirQualityP.classList.add("todayHighlightsTitle");
  cardAirQualityP.textContent = "Air quality (US EPA):";
  const cardAirQualityValue = document.createElement("p");
  cardAirQualityValue.classList.add("todayHighlightsValue");
  cardAirQuality.appendChild(cardAirQualityP);
  cardAirQuality.appendChild(cardAirQualityValue);
  todayHighlightsDIV.appendChild(cardAirQuality);

  // Visibility:
  const cardVisibility = document.createElement("div");
  cardVisibility.classList.add("todayHighlightsCard");
  const cardVisibilityP = document.createElement("p");
  cardVisibilityP.classList.add("todayHighlightsTitle");
  cardVisibilityP.textContent = "Visibility:";
  const cardVisibilityValue = document.createElement("p");
  cardVisibilityValue.classList.add("todayHighlightsValue");
  cardVisibility.appendChild(cardVisibilityP);
  cardVisibility.appendChild(cardVisibilityValue);
  todayHighlightsDIV.appendChild(cardVisibility);

  rightDOM.appendChild(weekDIV);

  todayHighlightsP.textContent = "Current weather"; // permanent so add here
  rightDOM.appendChild(todayHighlightsP);

  rightDOM.appendChild(todayHighlightsDIV);

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
    cardUVvalue,
    sunscreenReminder,
    feelsLikeValue,
    cardPressureValue,
    cardWindValue,
    cardAirQualityValue,
    cardVisibilityValue,
  };
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
    cardUVvalue,
    sunscreenReminder,
    feelsLikeValue,
    cardPressureValue,
    cardWindValue,
    cardAirQualityValue,
    cardVisibilityValue,
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

  const {
    weatherConditionID,
    localTimeHour,
    uvIndex,
    feelLike,
    wind,
    visibility,
    airQuality,
    pressure,
    windDirection,
  } = await fetchCurrentData(cityInput);

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

  const { uvText, suncreenReminde } = UVrate(uvIndex);
  cardUVvalue.textContent = uvIndex + " - " + uvText;
  sunscreenReminder.textContent = suncreenReminde;

  feelsLikeValue.textContent = `${feelLike} °C`;

  cardPressureValue.textContent = pressure + " mb";

  cardWindValue.textContent = wind + " (" + windDirection + ")";

  const { airQualityText } = AQI(airQuality);
  cardAirQualityValue.textContent = airQuality + " - " + airQualityText;

  cardVisibilityValue.textContent = visibility + " km";
}

export function cleanRightDOM() {
  const rightDOM = document.querySelector(".right");
  rightDOM.innerHTML = "";
}

function UVrate(uvValue) {
  if (uvValue < 3) {
    const uvText = "low";
    const suncreenReminde = "No protection needed";
    return { uvText, suncreenReminde };
  } else if (uvValue >= 3 && uvValue < 6) {
    const uvText = "moderate";
    const suncreenReminde = "Some protection is required";
    return { uvText, suncreenReminde };
  } else if (uvValue >= 6 && uvValue < 8) {
    const uvText = "high";
    const suncreenReminde = "Protection essential";
    return { uvText, suncreenReminde };
  } else if (uvValue >= 8 && uvValue < 11) {
    const uvText = "very high";
    const suncreenReminde = "Extra protection is needed";
    return { uvText, suncreenReminde };
  } else if (uvValue >= 11) {
    const uvText = "extreme";
    const suncreenReminde = "Stay inside";
    return { uvText, suncreenReminde };
  }

  // Default return if none of the conditions are met
  const uvText = "unknown";
  const suncreenReminde = "Unknown protection level";
  return { uvText, suncreenReminde };
}

function AQI(airQualityValue) {
  if (airQualityValue < 51) {
    const airQualityText = "good";
    return { airQualityText };
  } else if (airQualityValue >= 51 && airQualityValue < 101) {
    const airQualityText = "moderate";
    return { airQualityText };
  } else if (airQualityValue >= 101 && airQualityValue < 151) {
    const airQualityText = "unhealthy for sensitive groups";
    return { airQualityText };
  } else if (airQualityValue >= 151) {
    const airQualityText = "unhealthy";
    return { airQualityText };
  }

  // Default return if none of the conditions are met
  const airQualityText = "unknown";
  return { airQualityText };
}
