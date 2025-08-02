import "./OrderCard.scss";

const OrderCard = ({
  id,
  image,
  name,
  description,
  price,
  quantity,
  decreaseQuantityBtn,
  increaseQuantityBtn,
}) => {
  return (
    <div className="order-item">
      <div className="item-image">
        <img src={image} alt={name} />
      </div>
      <div className="item-content">
        <div className="item-details">
          <h3 className="item-name">{name}</h3>
          <p className="item-description">{description}</p>
        </div>
        <div className="item-controls">
          <div className="quantity-controls">
            <button
              onClick={() => decreaseQuantityBtn(id)}
              className="quantity-btn"
            >
              −
            </button>
            <span className="quantity">{quantity}</span>
            <button
              onClick={() => increaseQuantityBtn(id)}
              className="quantity-btn"
            >
              +
            </button>
          </div>
          <div className="item-price">{price * quantity} ₽</div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
