export const currency = value => {
  return value.toLocaleString(navigator.language, { minimumFractionDigits: 2 });
};

export const date = date => {
  let newDate = date.split("-");
  const months = {
    "01": "January",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    "10": "October",
    "11": "November",
    "12": "December"
  };
  if (newDate[2].charAt(0) === "0") {
    newDate[2] = newDate[2].substr(1);
  }
  return `${newDate[2]} ${months[newDate[1]]} ${newDate[0]}`;
};
