export async function fetchCurrentData(cityInout) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=0dbcafa2b4e449eaa3d120341240707&q=${cityInout}&aqi=yes`,
      { mode: "cors" }
    );

    // Error check
    if (!response.ok) {
      throw new Error(`Response status: failed to fetch current data`);
    }

    const APIData = await response.json();

    console.log("Current temperature: " + APIData.current.temp_c); //debugging

    const weatherConditionID = APIData.current.condition.code;
    const localTimeHour = APIData.location.localtime
      .split(" ")[1]
      .split(":")[0];

    // For right DOM cards
    const uvIndex = APIData.current.uv; // Correcting uvIndex property access
    const feelLike = APIData.current.feelslike_c;
    const wind = APIData.current.wind_kph;
    const windDirection = APIData.current.wind_dir;
    const visibility = APIData.current.vis_km;
    const airQuality = APIData.current.air_quality?.["us-epa-index"];
    const pressure = APIData.current.pressure_mb;

    console.log("Time " + localTimeHour); // debugging

    return {
      weatherConditionText: APIData.current.condition.text,
      tempCelsius: APIData.current.temp_c,
      weatherConditionID,
      localTimeHour,
      uvIndex,
      feelLike,
      wind,
      visibility,
      airQuality,
      pressure,
      windDirection,
    };
  } catch (error) {
    console.error(error.message);
  }
}

export async function fetchNextThreeDaysData(cityInout) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=0dbcafa2b4e449eaa3d120341240707&q=${cityInout}&days=4`,
      { mode: "cors" }
    );

    // Error check
    if (!response.ok) {
      throw new Error(`Response status: failed to fetch data for next 3 days`);
    }

    const forecastAPIData = await response.json();

    const city = forecastAPIData.location.name;
    const country = forecastAPIData.location.country;

    // Card 1
    const maxTempCard1 = forecastAPIData.forecast.forecastday[1].day.maxtemp_c;
    const minTempCard1 = forecastAPIData.forecast.forecastday[1].day.mintemp_c;
    const conditionCodeCard1 =
      forecastAPIData.forecast.forecastday[1].day.condition.code;

    const timeHourCardAll = forecastAPIData.location.localtime
      .split(" ")[1]
      .split(":")[0];

    // Card 2
    const maxTempCard2 = forecastAPIData.forecast.forecastday[2].day.maxtemp_c;
    const minTempCard2 = forecastAPIData.forecast.forecastday[2].day.mintemp_c;
    const conditionCodeCard2 =
      forecastAPIData.forecast.forecastday[2].day.condition.code;

    // Card 3
    const maxTempCard3 = forecastAPIData.forecast.forecastday[3].day.maxtemp_c;
    const minTempCard3 = forecastAPIData.forecast.forecastday[3].day.mintemp_c;
    const conditionCodeCard3 =
      forecastAPIData.forecast.forecastday[3].day.condition.code;

    return {
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
    };
  } catch (error) {
    console.error(error.message);
  }
}

export function renameWeatherCondition(weatherConditionID) {
  if ([1000].includes(weatherConditionID)) {
    const weatherCondition = "sun";
    return weatherCondition;
  } else if (
    [1003, 1006, 1009, 1030, 1135, 1147].includes(weatherConditionID)
  ) {
    const weatherCondition = "clouds";
    return weatherCondition;
  } else if (
    [
      1063, 1150, 1153, 1072, 1168, 1171, 1180, 1183, 1186, 1189, 1192, 1195,
      1198, 1201, 1240, 1243, 1246, 1249, 1252,
    ].includes(weatherConditionID)
  ) {
    const weatherCondition = "rain";
    return weatherCondition;
  } else if (
    [
      1066, 1069, 1114, 1204, 1207, 1210, 1213, 1216, 1219, 1222, 1225, 1237,
      1255, 1258, 1261, 1264, 1279,
    ].includes(weatherConditionID)
  ) {
    const weatherCondition = "snow";
    return weatherCondition;
  } else if ([1087, 1117, 1273, 1276, 1282].includes(weatherConditionID)) {
    const weatherCondition = "storm";
    return weatherCondition;
  }
}
