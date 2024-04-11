import React, { useState } from "react";
import { Rating } from "@/components";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import { Hotel } from "@/types";
import "./HotelCard.scss";

const HotelCard: React.FC<Hotel> = ({
  name,
  image,
  location,
  rating,
  capacity,
  availability: { date, duration },
  price,
  departureFrom,
  description,
}: Hotel) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="card">
      <div className="card__content">
        <div className="card__first-section">
          <img src={image} alt="Card" className="card__image" />
          {description && (
            <div
              onClick={toggleExpand}
              className="card__expand-button"
              data-testid="expand-button"
            >
              <strong>Read {expanded ? "less" : "more"}</strong>&nbsp;about this
              hotel&nbsp;{expanded ? <FaChevronDown /> : <FaChevronRight />}
            </div>
          )}
        </div>
        <div className="card__second-section">
          <h1 className="card__name">{name}</h1>
          <p className="card__location">{location}</p>
          <div className="card__rating">
            <Rating rating={rating} />
          </div>
          <p className="card__capacity">{capacity}</p>
          <p>
            <strong>{date}</strong> for <strong>{duration}</strong>
          </p>
          <p className="card__departure">
            departing from <strong>{departureFrom}</strong>
          </p>
          <button className="card__book-button">
            Book now
            <br />
            <span className="card__price">
              £{price.toLocaleString("en-GB", { minimumFractionDigits: 2 })}
            </span>
          </button>
        </div>
      </div>
      {expanded && (
        <div className="card__expandable-area">
          <h3 className="card__expandable-area__header">Overview</h3>
          <p className="card__expandable-area__content">{description}</p>
        </div>
      )}
    </div>
  );
};

export default HotelCard;
