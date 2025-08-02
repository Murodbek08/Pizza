import { LazyLoadImage } from "react-lazy-load-image-component";
import "./AdvertisingCard.scss";

const AdvertisingCard = ({ img, text, color }) => {
  return (
    <div style={{ backgroundColor: color }} className={`advertising-card`}>
      <LazyLoadImage src={img} alt="No img ?" />
      <h4>{text}</h4>
    </div>
  );
};

export default AdvertisingCard;
