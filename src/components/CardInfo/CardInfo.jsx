import { useContext } from "react";
import {
  bellPepper,
  cheese,
  cucumber,
  fireIcon,
  infoIcon,
  mushroom,
  onion,
  saltShaker,
  sous,
} from "../../assets";
import { CartContext, LanguageContext } from "../../context";
import { products } from "../../data/products";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./CardInfo.scss";

const CardInfo = ({ productId, cardInfoModal, setCardInfoModal }) => {
  const { lang } = useContext(LanguageContext);
  const { carts, setCarts } = useContext(CartContext);

  const product = products?.find((el) => el.id === productId);

  const addToCardBtn = (id) => {
    setCardInfoModal(false);
    const orderProduct = products.find((el) => el.id === id);
    console.log(orderProduct);

    const checkOrderProduct = carts.find((el) => el.id === id);
    if (checkOrderProduct) {
      const updatedCart = carts.map((el) =>
        el.id === id ? { ...el, quantity: el.quantity + 1 } : el
      );

      setCarts(updatedCart);
      localStorage.setItem("carts", JSON.stringify(updatedCart));
    } else {
      const addCart = [...carts, { ...orderProduct, quantity: 1 }];
      setCarts(addCart);
      localStorage.setItem("carts", JSON.stringify(addCart));
    }
  };

  return (
    <div className={`card-info ${cardInfoModal ? "card-info-open" : ""} `}>
      <div className="main-content">
        <div className="card-header">
          {product?.filterName !== "" ? (
            <div className="card-badge">
              <span>{product?.filterName}</span>
            </div>
          ) : (
            ""
          )}
          <div className="pizza-image">
            <LazyLoadImage
              src={product?.image}
              alt="No img ?"
              className="pizza-img"
            />
          </div>
        </div>
        <div className="pizza-options">
          <div className="pizza-options-header">
            <div className="pizza-options-header-text">
              <LazyLoadImage src={fireIcon} alt="No icon ?" />
              <h4>{product?.name}</h4>
            </div>
            <LazyLoadImage src={infoIcon} alt="No icon ?" />
          </div>

          <div className="ingredients-info">
            <div className="ingredient-item">
              <div className="ingredient-icon">
                <LazyLoadImage src={cheese} alt="No icon ?" />
              </div>
              <span>{lang.mozzarella}</span>
            </div>
            <div className="ingredient-item">
              <div className="ingredient-icon">
                <LazyLoadImage src={cucumber} alt="No icon ?" />
              </div>
              <span>{lang.pickledCucumbers}</span>
            </div>
            <div className="ingredient-item">
              <div className="ingredient-icon">
                <LazyLoadImage src={saltShaker} alt="No icon ?" />
              </div>
              <span>{lang.pepperoni}</span>
            </div>
            <div className="ingredient-item">
              <div className="ingredient-icon">
                <LazyLoadImage src={sous} alt="No icon ?" />
              </div>
              <span>{lang.tomatoSauce}</span>
            </div>
          </div>

          <div className="crust-selection">
            <div className="crust-options">
              <button className="crust-btn active">{lang.classicCrust}</button>
              <button className="crust-btn">{lang.thinCrust}</button>
            </div>
          </div>

          <div className="size-selection">
            <button className="size-btn active">20 см</button>
            <button className="size-btn">28 см</button>
            <button className="size-btn">33 см</button>
          </div>

          <div className="add-ingredients">
            <h3>{lang.addToPizza}</h3>
            <div className="ingredients-grid">
              <div className="add-ingredient-item">
                <div className="ingredient-icon">
                  <LazyLoadImage src={cheese} alt="No icon ?" />
                </div>
                <span className="ingredient-name">{lang.mozzarella}</span>
                <span className="ingredient-price">59 ₽</span>
              </div>
              <div className="add-ingredient-item">
                <div className="ingredient-icon">
                  <LazyLoadImage src={mushroom} alt="No icon ?" />
                </div>
                <span className="ingredient-name">{lang.champignons}</span>
                <span className="ingredient-price">59 ₽</span>
              </div>
              <div className="add-ingredient-item">
                <div className="ingredient-icon">
                  <LazyLoadImage src={onion} alt="No icon ?" />
                </div>
                <span className="ingredient-name">{lang.redOnion}</span>
                <span className="ingredient-price">59 ₽</span>
              </div>
              <div className="add-ingredient-item">
                <div className="ingredient-icon">
                  <LazyLoadImage src={bellPepper} alt="No icon ?" />
                </div>
                <span className="ingredient-name">{lang.sweetPepper}</span>
                <span className="ingredient-price">59 ₽</span>
              </div>
            </div>
          </div>

          <div className="order-summary">
            <div className="total-price">
              <span className="total-label">{lang.total}</span>
              <span className="price">{product?.price} ₽</span>
              <span className="weight">400 г</span>
            </div>
            <button
              onClick={() => addToCardBtn(productId)}
              className="add-to-cart-btn"
            >
              {lang.add}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
