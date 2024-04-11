import React from "react";
import { FaStar } from "react-icons/fa";

interface RatingProps {
  rating: number;
}

const Rating: React.FC<RatingProps> = ({ rating }): JSX.Element => {
  const stars = Array.from({ length: rating });

  const renderStars = () => stars.map((_, index) => <FaStar key={index} />);

  return <>{renderStars()}</>;
};

export default Rating;
