import { format } from 'date-fns';

export const currentDate = () => {
  const now = new Date();
  const dateString = format(now, 'dd MMMM yyyy'); // '09 February 2024'

  return dateString;
}