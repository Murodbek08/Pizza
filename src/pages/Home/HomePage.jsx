import AddressVerificationForm from "../../components/AddressVerificationForm/AddressVerificationForm";
import AdvertisingCard from "../../components/AdvertisingCard/AdvertisingCard";
import CategoriesCard from "../../components/CategoriesCard/CategoriesCard";
import { filterIcon, pizzaImage, pizzaImage2 } from "../../assets";
import { LazyLoadImage } from "react-lazy-load-image-component";
import CardInfo from "../../components/CardInfo/CardInfo";
import { useCategories } from "../../data/categories";
import Filter from "../../components/Filter/Filter";
import { LanguageContext } from "../../context";
import { products } from "../../data/products";
import Card from "../../components/Card/Card";
import { useContext, useState } from "react";

import "./HomePage.scss";

const HomePage = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const [productId, setProductId] = useState("");
  const [cardInfoModal, setCardInfoModal] = useState(false);

  const { lang } = useContext(LanguageContext);
  const categories = useCategories();
  const pizzas = products.filter((el) => el.category === "Пицца");
  const sushi = products.filter((el) => el.category === "Суши");
  const snacks = products.filter((el) => el.category === "Закуски");
  const desserts = products.filter((el) => el.category === "Десерты");
  const drinks = products.filter((el) => el.category === "Напитки");
  const combo = products.filter((el) => el.category === "Комбо");

  const filterBtn = () => {
    setOpenFilter((prev) => !prev);
  };

  const cardBtn = (id) => {
    setProductId(id);
    setCardInfoModal(true);
  };

  return (
    <>
      <section id="Aktsiyalar" className="hero-section">
        <div className="container">
          <div className="categories-cards">
            {categories.map((el, index) => (
              <CategoriesCard key={index} {...el} />
            ))}
          </div>
          <div className="advertising-cards">
            <AdvertisingCard
              img={pizzaImage}
              text={lang.text1}
              color="#FF7010 "
            />
            <AdvertisingCard
              img={pizzaImage2}
              text={lang.text2}
              color="#E23535"
            />
            <AdvertisingCard
              img={pizzaImage}
              text={lang.text1}
              color="#FF7010 "
            />
            <AdvertisingCard
              img={pizzaImage2}
              text={lang.text2}
              color="#E23535"
            />
          </div>
          <AddressVerificationForm />
        </div>
      </section>
      <section id="Пицца" className="section">
        <div className="container">
          <div className="section-top">
            <h2>{lang.pizza}</h2>
            <button onClick={filterBtn}>
              <LazyLoadImage src={filterIcon} alt="No icon ?" />
              <span>{lang.filters}</span>
            </button>
          </div>
          <div className="cards">
            {pizzas.map((el) => (
              <Card key={el.id} {...el} cardBtn={cardBtn} />
            ))}
          </div>
        </div>
      </section>
      <section id="Суши" className="section">
        <div className="container">
          <div className="section-top">
            <h2>{lang.sushi}</h2>
            <button onClick={filterBtn}>
              <LazyLoadImage src={filterIcon} alt="No icon ?" />
              <span>{lang.filters}</span>
            </button>
          </div>
          <div className="cards">
            {sushi.map((el) => (
              <Card key={el.id} {...el} cardBtn={cardBtn} />
            ))}
          </div>
        </div>
      </section>
      <section id="Закуски" className="section">
        <div className="container">
          <div className="section-top">
            <h2>{lang.snacks}</h2>
            <button onClick={filterBtn}>
              <LazyLoadImage src={filterIcon} alt="No icon ?" />
              <span>{lang.filters}</span>
            </button>
          </div>
          <div className="cards">
            {snacks.map((el) => (
              <Card key={el.id} {...el} cardBtn={cardBtn} />
            ))}
          </div>
        </div>
      </section>
      <section id="Десерты" className="section">
        <div className="container">
          <div className="section-top">
            <h2>{lang.desserts}</h2>
            <button onClick={filterBtn}>
              <LazyLoadImage src={filterIcon} alt="No icon ?" />
              <span>{lang.filters}</span>
            </button>
          </div>
          <div className="cards">
            {desserts.map((el) => (
              <Card key={el.id} {...el} cardBtn={cardBtn} />
            ))}
          </div>
        </div>
      </section>
      <section id="Напитки" className="section">
        <div className="container">
          <div className="section-top">
            <h2>{lang.drinks}</h2>
            <button onClick={filterBtn}>
              <LazyLoadImage src={filterIcon} alt="No icon ?" />
              <span>{lang.filters}</span>
            </button>
          </div>
          <div className="cards">
            {drinks.map((el) => (
              <Card key={el.id} {...el} cardBtn={cardBtn} />
            ))}
          </div>
        </div>
      </section>
      <section id="Комбо" className="section">
        <div className="container">
          <div className="section-top">
            <h2>{lang.combo}</h2>
            <button onClick={filterBtn}>
              <LazyLoadImage src={filterIcon} alt="No icon ?" />
              <span>{lang.filters}</span>
            </button>
          </div>
          <div className="cards">
            {combo.map((el) => (
              <Card key={el.id} {...el} cardBtn={cardBtn} />
            ))}
          </div>
        </div>
      </section>
      <section className="pizza-delevery">
        <div className="container">
          <h1 className="title">Доставка пиццы в Москве</h1>
          <div className="content">
            <p className="description">
              Захотелось чего-то вкусного и сытного? Желание простое и понятное,
              только в холодильнике все не то, и до магазина идти лень. Все
              пропало? Нет. Недолого заказать пиццу в Москве очень просто! Вам
              на помощь спешит супергерой – Domino's Pizza! Как у любого
              супергероя, у Domino's Pizza есть свои суперсилы: восхитительный
              вкус продукции из отборных ингредиентов; широкий ассортимент,
              включающий легендарные, фирменные и классические виды, для
              вегетарианцев и любителей экспериментировать; быстрая и бесплатная
              доставка пиццы в течение 30 минут, чтобы вкусное и ароматное блюдо
              не успевало остыть.
            </p>
            <h2 className="section-title">Как сделать заказ</h2>
            <p className="order-info">
              Доставка пиццы от Domino's – это когда Вам не нужно никуда ехать
              или звонить, ведь есть Интернет. Никогда еще заказ пиццы на дом в
              Москве не был таким простым! Чтобы заказать пиццу онлайн, Вам
              необходимо выбрать понравившуюся картинку и количество порций,
              положить в «Корзину», где Вы сможете посмотреть полную стоимость
              заказа, а затем нажать кнопку «Оформить заказ».
            </p>
            <button className="show-more-btn">Показать полностью</button>
          </div>
        </div>
      </section>
      <Filter openFilter={openFilter} setOpenFilter={setOpenFilter} />
      <CardInfo
        productId={productId}
        cardInfoModal={cardInfoModal}
        setCardInfoModal={setCardInfoModal}
      />
    </>
  );
};

export default HomePage;
