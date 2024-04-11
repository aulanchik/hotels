import React, { useState } from "react";
import { HotelsList } from "@/containers";
import { sortByName, sortByPrice, sortByRating } from "@/utils";
import { PiCurrencyGbpFill } from "react-icons/pi";
import { TiSortAlphabetically } from "react-icons/ti";
import { FaStar } from "react-icons/fa";
import data from "@/data/hotels.json";
import { Hotel } from "@/types";
import "./App.scss";

const App: React.FC = (): JSX.Element => {
  const [hotels, setHotels] = useState<Hotel[]>(data);
  const [sortBy, setSortBy] = useState<string>("name");

  const sortHotels = (criteria: string) => {
    let sortedHotels: Hotel[] = [];
    switch (criteria) {
      case "price":
        sortedHotels = sortByPrice(hotels);
        break;
      case "rating":
        sortedHotels = sortByRating(hotels);
        break;
      case "name":
      default:
        sortedHotels = sortByName(hotels);
        break;
    }
    setHotels(sortedHotels);
    setSortBy(criteria);
  };

  return (
    <div className="app app__background">
      <div className="app__sort-options">
        <button
          className={`app__sort-button ${sortBy === "name" ? "active" : ""}`}
          onClick={() => sortHotels("name")}
        >
          <span>
            sort <strong>alphabetically</strong>
          </span>
          <TiSortAlphabetically className="app__sort-icon" size={30} />
        </button>

        <button
          className={`app__sort-button ${sortBy === "price" ? "active" : ""}`}
          onClick={() => sortHotels("price")}
        >
          <span>
            sort by <strong>price</strong>
          </span>
          <PiCurrencyGbpFill className="app__sort-icon" size={30} />
        </button>

        <button
          className={`app__sort-button ${sortBy === "rating" ? "active" : ""}`}
          onClick={() => sortHotels("rating")}
        >
          <span>
            sort by <strong>star rating</strong>
          </span>
          <FaStar className="app__sort-icon" size={30} />
        </button>
      </div>
      <main className="app__contents">
        <HotelsList hotels={hotels} />
      </main>
    </div>
  );
};

export default App;
