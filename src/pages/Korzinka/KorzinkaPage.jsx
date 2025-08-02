import KorzinkaOrderCard from "../../components/KorzinkaOrderCard/KorzinkaOrderCard";
import { CartContext, LanguageContext } from "../../context";
// import CardInfo from "../../components/CardInfo/CardInfo";
// import Card from "../../components/Card/Card";
import { useContext } from "react";
import { sendIcon } from "../../assets";
// import Slider from "react-slick";

import "./KorzinkaPage.scss";
// import { products } from "../../data/products";

const KorzinkaPage = () => {
  // const [productId, setProductId] = useState("");
  // const [cardInfoModal, setCardInfoModal] = useState(false);
  const { lang } = useContext(LanguageContext);
  const { carts, setCarts } = useContext(CartContext);

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 200,
  //   slidesToShow: 3,
  //   slidesToScroll: 2,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  // };

  // const snacks = products.filter((el) => el.category === "Закуски");

  // const cardBtn = (id) => {
  //   setProductId(id);
  //   setCardInfoModal(true);
  // };

  const total = carts?.reduce(
    (acc, cur) => acc + cur?.price * cur?.quantity,
    0
  );

  const increaseQuantityBtn = (id) => {
    const checkOrderProduct = carts?.find((el) => el.id === id);
    if (checkOrderProduct) {
      const updatedCart = carts.map((el) =>
        el?.id === id ? { ...el, quantity: el?.quantity + 1 } : el
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
    } else if (checkOrderProduct && checkOrderProduct?.quantity === 1) {
      const isDelete = window.confirm(
        "Siz bu mahsulotni uchirishni istaysizmi ?"
      );
      if (isDelete) {
        const filteredCart = carts?.filter((el) => el.id !== id);
        setCarts(filteredCart);
        localStorage.setItem("carts", JSON.stringify(filteredCart));
      }
    }
  };

  return (
    <>
      <section className="korzinka-page-order">
        <div className="container">
          <h2>{lang?.yourOrder}</h2>
          <div className="korzinka-page-order-cards">
            {carts.map((el) => (
              <KorzinkaOrderCard
                key={el?.id}
                {...el}
                increaseQuantityBtn={increaseQuantityBtn}
                decreaseQuantityBtn={decreaseQuantityBtn}
              />
            ))}
          </div>
          <div className="promo-code-card">
            <div className="input-container">
              <input type="text" placeholder={lang?.promoCode} />
              <img src={sendIcon} alt="No icon ?" />
            </div>
            <span>
              {lang?.total} {total} ₽
            </span>
          </div>
        </div>
      </section>
      {/* <section className="korzinka-page-slider">
        <div className="container">
          <h2>{lang?.addToOrder} ?</h2>
          <Slider {...settings}>
            {snacks?.map((el) => (
              <Card key={el?.id} {...el} cardBtn={cardBtn} />
            ))}
          </Slider>
        </div>
      </section>
      <CardInfo
        productId={productId}
        cardInfoModal={cardInfoModal}
        setCardInfoModal={setCardInfoModal}
      /> */}
    </>
  );
};

export default KorzinkaPage;
