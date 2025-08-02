import { Link } from "react-router-dom";
import "./CategoriesCard.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CategoriesCard = ({ name, image }) => {
  return (
    <Link to={`#${name}`} className="categories-card">
      <LazyLoadImage src={image} alt={name} />
      <h5 className="name">{name}</h5>
    </Link>
  );
};

export default CategoriesCard;
