import React from "react";
import { Hotel } from "@/types";
import { HotelCard } from "@/containers";
import "./HotelsList.scss";

interface HotelsListProps {
  hotels: Hotel[];
}

const HotelsList: React.FC<HotelsListProps> = ({ hotels }): JSX.Element => {
  return (
    <div className="list">
      {hotels.map((hotel) => (
        <HotelCard key={hotel.id} {...hotel} />
      ))}
    </div>
  );
};

export default HotelsList;
