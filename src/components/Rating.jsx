import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';


function StarRating ({ initialRating}) {

  return (
    <div>
      {Array.from({ length: 5 }, (_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={ index < initialRating ? solidStar : solidStar}
          style={{ color: index < initialRating ? '#ff6060' : '#E3E3E3'
        
           }}
           size={"2x"}
        />
      ))}
    </div>
  );
};

export default StarRating;