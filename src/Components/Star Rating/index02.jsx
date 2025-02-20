import "./style02.css";
import { useState } from "react";

const StarIcon = (props) => {
  const { click, mouseEnter, mouseLeave, i, classname } = props;
  return (
    <span
      className={"star"}
      onClick={() => click(i)}
      onMouseMove={() => mouseEnter(i)}
      onMouseLeave={() => mouseLeave(i)}
    >
      <svg
        className={`star-icon ${classname}`}
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#5f6368"
      >
        <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
      </svg>
    </span>
  );
};

const StarRating = ({ noOfRating = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [clicks, setClicks] = useState(0);

  const handleClick = (getCurrentIndex) => {
    
    setRating(getCurrentIndex);
  };
  const handleMouseEnter = (getCurrentIndex) => {
    setHover(getCurrentIndex);
  };
  const handleMouseLeave = (getCurrentIndex) => {
    switch (getCurrentIndex) {
      case 1:
        setHover(0);
        break;
      case 2:
        setHover(0);
        break;
      case 3:
        setHover(0);
        break;
      case 4:
        setHover(0);
        break;
      case 5:
        setHover(0);
        break;
      default:
        return;
    }
  };
  return (
    <>
      <div className="container">
        <div className="rating-wrapper">
          {[...Array(noOfRating)].map((_, index) => {
            index += 1;
            console.log(index <= (hover || rating));

            return (
              <StarIcon
                classname={index <= (hover || rating) ? "active" : "inactive"}
                key={index}
                click={handleClick}
                mouseEnter={handleMouseEnter}
                mouseLeave={handleMouseLeave}
                i={index}
              />
            );
          })}
        </div>
        <h1>Rating is: {rating}</h1>
      </div>
    </>
  );
};

export default StarRating;
