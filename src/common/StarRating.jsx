import { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ totalStars, onStarClick, rating, submitted }) => {
  const [hoverIndex, setHoverIndex] = useState(-1);

  const handleStarClick = (starIndex) => {
    if (!submitted) {
      onStarClick(starIndex + 1);
    }
  };

  return (
    <div>
      {[...Array(totalStars)].map((_, index) => (
        <span
          key={index}
          style={{
            cursor: "pointer",
            fontSize: "20px",
            color:
              submitted || index <= rating - 1 || index <= hoverIndex
                ? "yellow"
                : "gray",
          }}
          onClick={() => handleStarClick(index)}
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(-1)}
        >
          {index < rating ? <FaStar /> : <FaStar />}
        </span>
      ))}
    </div>
  );
};

export default StarRating;
