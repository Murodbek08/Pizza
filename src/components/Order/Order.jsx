import { LazyLoadImage } from "react-lazy-load-image-component";
import { CartContext, LanguageContext } from "../../context";
import OrderCard from "../OrderCard/OrderCard";
import { crossIcon } from "../../assets";
import { useContext } from "react";

import "./Order.scss";
import { useNavigate } from "react-router-dom";

const Order = ({ openOrder, setOpenOrder }) => {
  const { lang } = useContext(LanguageContext);
  const { carts, setCarts } = useContext(CartContext);
  const navigate = useNavigate();

  const total = carts?.reduce(
    (acc, cur) => acc + cur?.price * cur?.quantity,
    0
  );

  const increaseQuantityBtn = (id) => {
    const checkOrderProduct = carts.find((el) => el.id === id);
    if (checkOrderProduct) {
      const updatedCart = carts.map((el) =>
        el.id === id ? { ...el, quantity: el.quantity + 1 } : el
      );
      setCarts(updatedCart);
      localStorage.setItem("carts", JSON.stringify(updatedCart));
    }
  };

  const decreaseQuantityBtn = (id) => {
    const checkOrderProduct = carts.find((el) => el.id === id);
    if (checkOrderProduct && checkOrderProduct.quantity > 1) {
      const updatedCart = carts.map((el) =>
        el.id === id ? { ...el, quantity: el.quantity - 1 } : el
      );
      setCarts(updatedCart);
    } else if (checkOrderProduct && checkOrderProduct.quantity === 1) {
      const isDelete = window.confirm(
        "Siz bu mahsulotni uchirishni istaysizmi ?"
      );
      if (isDelete) {
        const filteredCart = carts.filter((el) => el.id !== id);
        setCarts(filteredCart);
        localStorage.setItem("carts", JSON.stringify(filteredCart));
      }
    }
  };

  const orderCloseBtn = () => {
    setOpenOrder(false);
  };

  const orderCheckoutBtn = () => {
    navigate("/korzinka");
    setOpenOrder(false);
  };

  return (
    <div className={`order-content ${openOrder ? "order-open" : ""}`}>
      <div className={`order-container`}>
        <div className="order-header">
          <h1 className="order-title">{lang.yourOrder}</h1>
          <button onClick={orderCloseBtn} className="close-btn">
            <LazyLoadImage src={crossIcon} alt="No icon ?" />
          </button>
        </div>
        <div className="order-items">
          {carts.map((el) => (
            <OrderCard
              key={el.id}
              {...el}
              decreaseQuantityBtn={decreaseQuantityBtn}
              increaseQuantityBtn={increaseQuantityBtn}
            />
          ))}
        </div>
        <div className="order-footer">
          <span className="total-amount">
            {lang?.total} {total} ₽
          </span>
          <button onClick={orderCheckoutBtn} className="checkout-btn">
            {lang?.placeAnOrder}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
