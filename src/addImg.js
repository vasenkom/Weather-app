import DayClouds from "./img/DayClouds.png";
import DayRain from "./img/DayRain.png";
import DaySnow from "./img/DaySnow.png";
import DayStorm from "./img/DayStorm.png";
import DaySun from "./img/DaySun.png";
import DayWind from "./img/DayWind.png";

import NightClouds from "./img/NightClouds.png";
import NightRain from "./img/NightRain.png";
import NightSnow from "./img/NightSnow.png";
import NightStorm from "./img/NightStorm.png";
import NightMoon from "./img/NightMoon.png";
import NightWind from "./img/NightWind.png";

import search from "./img/search.png";

import { fetchCurrentData } from "./getDataAPI";
import { renameWeatherCondition } from "./getDataAPI";
import { submitButton } from "./index";

// Adding an img according to weather condition and part of the day
export async function addImage(cityInput) {
  const { weatherConditionID, localTimeHour } = await fetchCurrentData(
    cityInput
  );
  const weatherCondition = renameWeatherCondition(weatherConditionID);

  const localTime = parseInt(localTimeHour, 10);
  console.log(localTime, localTimeHour);

  let imgSrc;

  if (localTime >= 6 && localTime < 19) {
    // Day time
    switch (weatherCondition) {
      case "sun":
        imgSrc = DaySun;
        break;
      case "clouds":
        imgSrc = DayClouds;
        break;
      case "rain":
        imgSrc = DayRain;
        break;
      case "snow":
        imgSrc = DaySnow;
        break;
      case "storm":
        imgSrc = DayStorm;
        break;
      default:
        imgSrc = DayWind;
        break;
    }
  } else {
    // Night time
    switch (weatherCondition) {
      case "sun":
        imgSrc = NightMoon;
        break;
      case "clouds":
        imgSrc = NightClouds;
        break;
      case "rain":
        imgSrc = NightRain;
        break;
      case "snow":
        imgSrc = NightSnow;
        break;
      case "storm":
        imgSrc = NightStorm;
        break;
      default:
        imgSrc = NightWind;
        break;
    }
  }

  return imgSrc;
}

export function addSearchIcon() {
  const searchImage = document.createElement("img");
  searchImage.classList.add("searchButtonImg");
  searchImage.src = search;
  submitButton.append(searchImage);
}
