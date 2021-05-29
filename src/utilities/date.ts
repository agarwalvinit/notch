import { months } from "../constants/months";

export const getDate = (date: string) => {
  if (!date) return "-";
  const dateSplit = date.split("-");
  const monthInNumbers = +dateSplit[1];
  return `${months[monthInNumbers - 1]} ${dateSplit[2]}, ${dateSplit[0]}`;
};

export const getDateInYYYYMMDD = (date: string) => date?.split("-").join("");
