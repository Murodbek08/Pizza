import { useContext } from "react";
import "./Card.scss";
import {  LanguageContext } from "../../context";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Card = ({ id, image, name, description, price, filterName, cardBtn }) => {
  const { lang } = useContext(LanguageContext);


  return (
    <div className="card">
      <div className="card-img">
        {filterName !== "" ? (
          <span className="card-filter">{filterName}</span>
        ) : (
          ""
        )}
        <LazyLoadImage effect="blur" src={image} alt={name} />
      </div>
      <div className="card-content">
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="card-footer">
          <button onClick={() => cardBtn(id)}>{lang?.select}</button>
          <h4>
            {`${
              lang?.from === "от"
                ? lang?.from + "₽" + " " + price
                : price + "₽" + " " + lang?.from
            }`}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
