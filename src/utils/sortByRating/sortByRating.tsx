import { Hotel } from "@/types";

const sortByRating = (hotels: Hotel[]): Hotel[] =>
  hotels.slice().sort((a, b) => b.rating - a.rating);

export default sortByRating;
