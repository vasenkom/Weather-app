import "./style.css";
import { addLeftPartDOM } from "./leftDOM";
import { fetchData } from "./getDataAPI";
import { addSearchIcon } from "./addImg";
import { cleanLeftDOM } from "./leftDOM";
import { setLeftPartDOMContent } from "./leftDOM";
import { addRightPartDOM } from "./rightDOM";
import { setRightPartDOMContent } from "./rightDOM";
import { cleanRightDOM } from "./rightDOM";

export const locationSearchForm = document.querySelector(".locationSearchForm");
export const submitButton = document.querySelector(".press");

addSearchIcon();

submitButton.addEventListener("click", async (event) => {
  event.preventDefault();

  const cityInput = document.querySelector("#locationSearch").value;

  cleanLeftDOM();
  await setLeftPartDOMContent(cityInput);

  cleanRightDOM();
  await setRightPartDOMContent(cityInput);
});

document.addEventListener("DOMContentLoaded", () => {
  initialize("London");
});

async function initialize(defaultCity) {
  cleanLeftDOM();
  await setLeftPartDOMContent(defaultCity);

  cleanRightDOM();
  await setRightPartDOMContent(defaultCity);
}
