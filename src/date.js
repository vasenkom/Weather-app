function formatDate(date) {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}

export function getTodayDate() {
  return formatDate(new Date());
}

export function getCurrentAndNextDays() {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const days = [];
  const d = new Date();

  for (let i = 0; i < 4; i++) {
    const currentDay = new Date(d);
    currentDay.setDate(d.getDate() + i);
    days.push(weekday[currentDay.getDay()]);
  }

  return days;
}
