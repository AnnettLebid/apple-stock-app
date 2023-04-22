import { format, subDays, subMonths } from "date-fns";

export const formattedDate = (date) => format(date, "MM/dd/yyyy");

export const calculateTimePeriod = (selector) => {
  const today = new Date();
  const yesterday = subDays(today, 1);
  const monthBeforeToday = subMonths(today, 1);

  switch (selector) {
    case "168 Hours":
      return {
        startTime: formattedDate(monthBeforeToday),
        endTime: formattedDate(today),
      };
    case "1 Hours":
      return {
        startTime: formattedDate(yesterday),
        endTime: formattedDate(today),
        timeHour: `${today.getHours()}:${today.getMinutes()}`,
      };
    default:
      return {
        startTime: formattedDate(yesterday),
        endTime: formattedDate(yesterday),
      };
  }
};
