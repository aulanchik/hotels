import { Hotel } from "@/types";

const sortByPrice = (hotels: Hotel[]): Hotel[] =>
  hotels.slice().sort((a, b) => a.price - b.price);

export default sortByPrice;
