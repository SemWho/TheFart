/* eslint-disable prettier/prettier */
import { parseISO, format } from "date-fns";

// eslint-disable-next-line react/prop-types
export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}
