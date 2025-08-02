import "./KorzinkaOrderCard.scss";

const KorzinkaOrderCard = ({
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
    <div className="korzinka-page-order-card">
      <div className="korzinka-page-order-image">
        <img src={image} alt={name} />
      </div>
      <div className="korzinka-page-info">
        <h4>{name}</h4>
        <p>{description}</p>
      </div>
      <div className="korzinka-page-price">
        <div className="korzinka-page-actions">
          <button onClick={() => increaseQuantityBtn(id)}>+</button>
          <span>{quantity}</span>
          <button onClick={() => decreaseQuantityBtn(id)}>-</button>
        </div>
        <span>{price * quantity} ₽</span>
      </div>
    </div>
  );
};

export default KorzinkaOrderCard;
