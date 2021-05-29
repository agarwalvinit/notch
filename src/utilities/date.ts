import { months } from "../constants/months";

/**
 * This function take date string as an argument and return formatted date string
 * @param date date string in YYYY-MM-DD format eg - 2021-05-29
 * @returns date string in MMM dd, yyyy format eg - May 29, 2021
 */

export const getDate = (date: string) => {
  if (!date) return "-";
  const dateSplit = date.split("-");
  const monthInNumbers = +dateSplit[1];
  return `${months[monthInNumbers - 1]} ${dateSplit[2]}, ${dateSplit[0]}`;
};

/**
 * @param date date string in YYYY-MM-DD format eg - 2021-05-29
 * @returns string in YYYYMMDD format
 */

export const getDateInYYYYMMDD = (date: string) => date?.split("-").join("");
