import { Hotel } from "@/types";

const sortByName = (hotels: Hotel[]): Hotel[] =>
  hotels.slice().sort((a, b) => a.name.localeCompare(b.name));

export default sortByName;
