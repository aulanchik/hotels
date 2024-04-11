import React, { useState } from "react";
import { Hotel } from "@/types";
import { StarRating } from "@/components";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
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

  const toggleExpand = () => setExpanded(!expanded);

  return (
    <div className="card">
      <div className="card__content">
        <div className="card__image-section">
          <img src={image} className="card__image" alt={name} />
          {description && (
            <div className="card__expand" onClick={toggleExpand}>
              <strong>Read {expanded ? "less" : "more"}</strong>&nbsp;about this
              hotel&nbsp;{expanded ? <FaChevronDown /> : <FaChevronRight />}
            </div>
          )}
        </div>
        <div className="card__info-section">
          <h2 className="card__title">{name}</h2>
          <h3 className="card__location">{location}</h3>
          <div className="card__rating">
            <StarRating rating={rating} />
          </div>
          <p
            className="card__capacity"
            dangerouslySetInnerHTML={{ __html: capacity }}
          ></p>
          <p className="card__availability">
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
