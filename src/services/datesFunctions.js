// Functions relating to dates & conversion of dates

// Converts "2024/10/21" + "2024/10/25" to "21 - 25 October" or
export function eventCardDateFormat(startDate, endDate) {
  // Start Date
  // Split into an array by "/"
  let sDateArr = startDate.split("/");
  let sDay = sDateArr[2]; // Start day
  let sMonth = monthNumberToName(sDateArr[1]); // Start Month

  // End Date
  let eDateArr = endDate.split("/");
  let eDay = eDateArr[2]; // End day
  let eMonth = monthNumberToName(eDateArr[1]); // End Month

  if (sMonth === eMonth) {
    return `${sDay} - ${eDay} ${eMonth}`;
  } else {
    return `${sDay} ${sMonth} - ${eDay} ${eMonth}`;
  }
}

// Convert month number to name (Eg. 10 to "October")
export function monthNumberToName(monthNumber) {
  let monthsNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return monthsNames[parseInt(monthNumber) - 1];
}
