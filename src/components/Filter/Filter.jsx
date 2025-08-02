import { useContext } from "react";
import { crossIcon } from "../../assets";
import "./Filter.scss";
import { LanguageContext } from "../../context";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Filter = ({ openFilter, setOpenFilter }) => {
  const { lang } = useContext(LanguageContext);
  const resetFilterBtn = () => {
    setOpenFilter((prev) => !prev);
  };
  const applyFilterBtn = () => {
    setOpenFilter((prev) => !prev);
  };
  const closeFilterBtn = () => {
    setOpenFilter((prev) => !prev);
  };
  return (
    <div className={`filter-body ${openFilter ? "filter-open" : ""}`}>
      <div className="filter-container">
        <div className="filter-header">
          <h2>{lang.filters}</h2>
          <button onClick={closeFilterBtn} className="close-btn">
            <LazyLoadImage src={crossIcon} alt="No icon ?" />
          </button>
        </div>

        <div className="filter-section">
          <h3>{lang.general}</h3>
          <div className="filter-tags">
            <button className="tag active">{lang.hit}</button>
            <button className="tag">{lang.new}</button>
            <button className="tag">{lang.withMeat}</button>
          </div>
          <div className="filter-tags">
            <button className="tag">{lang.vegetarian}</button>
            <button className="tag">{lang.withChicken}</button>
            <button className="tag">{lang.noOnion}</button>
          </div>
          <div className="filter-tags">
            <button className="tag">{lang.withMushrooms}</button>
            <button className="tag">{lang.withSeafood}</button>
            <button className="tag">{lang.barbecue}</button>
          </div>
        </div>

        <div className="filter-section">
          <h3>{lang.cheese}</h3>
          <div className="filter-tags">
            <button className="tag">{lang.redKinto}</button>
            <button className="tag">{lang.mozzarella}</button>
            <button className="tag">{lang.cheddar}</button>
          </div>
          <div className="filter-tags">
            <button className="tag">{lang.withBlueMold}</button>
            <button className="tag">{lang.italianCheeseMix}</button>
          </div>
          <div className="filter-tags">
            <button className="tag">{lang.softYoungCheese}</button>
          </div>
        </div>

        <div className="filter-section">
          <h3>{lang.meat}</h3>
          <div className="filter-tags">
            <button className="tag">{lang.pepperoni}</button>
            <button className="tag">{lang.pork}</button>
            <button className="tag">{lang.ham}</button>
            <button className="tag">{lang.bacon}</button>
          </div>
          <div className="filter-tags">
            <button className="tag">{lang.beef}</button>
            <button className="tag">{lang.chorizo}</button>
            <button className="tag">{lang.sausages}</button>
            <button className="tag">{lang.chickenBreast}</button>
          </div>
        </div>

        <div className="filter-section">
          <h3>{lang.component}</h3>
          <div className="filter-tags">
            <button className="tag">{lang.shrimp}</button>
            <button className="tag">{lang.pineapples}</button>
            <button className="tag">{lang.champignons}</button>
            <button className="tag">{lang.onion}</button>
          </div>
          <div className="filter-tags">
            <button className="tag">{lang.jalapeñoPepper}</button>
            <button className="tag">{lang.oregano}</button>
            <button className="tag">{lang.greenPepper}</button>
          </div>
          <div className="filter-tags">
            <button className="tag">{lang.tomatoes}</button>
            <button className="tag">{lang.garlic}</button>
            <button className="tag">{lang.redPepper}</button>
            <button className="tag">{lang.olives}</button>
          </div>
          <div className="filter-tags">
            <button className="tag">{lang.blackOlives}</button>
            <button className="tag">{lang.strawberry}</button>
            <button className="tag">{lang.italianHerbMix}</button>
          </div>
        </div>

        <div className="filter-actions">
          <button onClick={resetFilterBtn} className="reset-btn">
            {lang.reset}
          </button>
          <button onClick={applyFilterBtn} className="apply-btn">
            {lang.apply}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
