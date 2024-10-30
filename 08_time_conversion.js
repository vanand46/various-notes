const timeConversion = (s) => {
  const timeList = s.split(":");
  let hour = parseInt(timeList[0]);
  const minute = timeList[1];
  const second = timeList[2].substring(0, 2);
  const hourFormat = timeList[2].slice(-2);
  if (hourFormat === "AM") {
    if (hour === 12) {
      hour = 0;
    }
  } else if (hourFormat === "PM") {
    if (hour !== 12) {
      hour += 12;
    }
  }
  const formmatedHour = hour.toString().padStart(2, "0");
  return `${formmatedHour}:${minute}:${second}`;
};

console.log(timeConversion("12:01:00PM"));
