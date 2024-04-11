import React from "react";
import { FaStar } from "react-icons/fa";

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const starArray = Array.from({ length: rating });
  const stars = starArray.map((_, index) => <FaStar key={index} />);

  return stars;
};

export default StarRating;
