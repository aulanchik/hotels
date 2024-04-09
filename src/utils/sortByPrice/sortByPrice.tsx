import { Hotel } from "@/types";

const sortByPrice = (hotels: Hotel[]): Hotel[] =>
  hotels.slice().sort((a, b) => {
    const priceA = parseFloat(a.price.replace(/,/g, ""));
    const priceB = parseFloat(b.price.replace(/,/g, ""));
    return priceA - priceB;
  });

export default sortByPrice;
