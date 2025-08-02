import { useContext, useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { CartContext, LanguageContext } from "../../context";
import { Link } from "react-router-dom";
import Order from "../Order/Order";
import {
  akkauntIcon,
  arrowDown,
  languageIcon,
  locationIcon,
  pizzaLogo,
  shoppingBag,
} from "../../assets";

import "./Header.scss";

const Header = () => {
  const [openOrder, setOpenOrder] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);
  const [isCategory, setIsCategory] = useState(false);
  const [showMiniHeader, setShowMiniHeader] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const { langType, lang, setLangType } = useContext(LanguageContext);
  const { carts } = useContext(CartContext);

  const total = carts.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );

  const langChange = (e) => {
    const value = e?.target?.value?.toLowerCase();
    setLangType(value);
    localStorage.setItem("language", value);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY) {
          setShowMiniHeader(true);
        } else {
          setShowMiniHeader(false);
        }
      } else {
        setShowMiniHeader(false);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const dropdown = () => {
    setIsDropdown((prev) => !prev);
  };

  const katalog = () => {
    setIsCategory((prev) => !prev);
  };

  const orderBtn = () => {
    setOpenOrder(true);
  };

  return (
    <>
      <header>
        <div className="container">
          {showMiniHeader ? (
            <nav className="nav-min-content">
              <Link to={"/"} className="nav-logo">
                <LazyLoadImage src={pizzaLogo} alt="No Logo ?" />
                <span>Куда пицца</span>
              </Link>
              <ul
                className={`${
                  isCategory ? "nav-menu-categry-active" : "nav-menu-categry"
                }`}
              >
                <li>
                  <a href="#Акции">{lang?.promotions}</a>
                </li>
                <li>
                  <a href="#Пицца">{lang?.pizza}</a>
                </li>
                <li>
                  <a href="#Суши">{lang?.sushi}</a>
                </li>
                <li>
                  <a href="#Напитки">{lang?.drinks}</a>
                </li>
                <li>
                  <a href="#Закуски">{lang?.snacks}</a>
                </li>
                <li>
                  <a href="#Комбо">{lang?.combo}</a>
                </li>
                <li>
                  <a href="#Десерты">{lang?.desserts}</a>
                </li>
                <li>
                  <a href="#Соусы">{lang?.sauces}</a>
                </li>
                <li className="dropdown">
                  <button onClick={dropdown} className="dropdown-btn">
                    <span>{lang?.other}</span>
                    <LazyLoadImage src={arrowDown} alt="No img ?" />
                  </button>
                  <div
                    className={`dropdown-content ${
                      isDropdown ? "dropdown-active" : ""
                    } `}
                  >
                    <p>{lang?.promotions}</p>
                    <p>{lang?.aboutTheCompany}</p>
                    <p>{lang?.userAgreement}</p>
                    <p>{lang?.warrantyTerms}</p>
                    <p>{lang?.restaurant}</p>
                    <p>{lang?.contacts}</p>
                    <p>{lang?.support}</p>
                    <p>{lang?.trackOrder}</p>
                  </div>
                </li>
              </ul>
              <div className="nav-min-content-btns">
                <button onClick={katalog} className="katalog">
                  <input
                    onClick={katalog}
                    hidden=" "
                    className="check-icon"
                    id="check-icon"
                    name="check-icon"
                    type="checkbox"
                  />
                  <label className="icon-menu" htmlFor="check-icon">
                    <div className="bar bar--1"></div>
                    <div className="bar bar--2"></div>
                    <div className="bar bar--3"></div>
                  </label>
                  <span>{lang?.catalog}</span>
                </button>
                <button onClick={orderBtn} className="nav-shopping-btn">
                  <LazyLoadImage src={shoppingBag} alt="No img ?" />
                  <span>{total} ₽</span>
                </button>
              </div>
            </nav>
          ) : (
            <nav className="nav-full-content">
              <div className="nav-top">
                <div className="nav-left">
                  <div className="location-container">
                    <LazyLoadImage src={locationIcon} alt="No img ?" />
                    <select name="city" id="city">
                      <option value="moskva">{lang?.moskva}</option>
                    </select>
                  </div>
                  <p>{lang?.checkAddress}</p>
                  <p>{lang?.averageDeliverytime}*:00:24:19</p>
                </div>
                <div className="nav-right">
                  <p>{lang?.openingHours}: с 11:00 до 23:00</p>
                  <div className="akkaunt-container">
                    <LazyLoadImage src={akkauntIcon} alt="" />
                    <span>{lang?.loginToYourAccount}</span>
                  </div>
                  <div className="language-container">
                    <LazyLoadImage src={languageIcon} alt="" />
                    <select
                      value={langType}
                      onChange={langChange}
                      name="lang"
                      id="lang"
                    >
                      <option value="ru">{lang?.ru}</option>
                      <option value="uz">{lang?.uz}</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="nav-bottom">
                <Link to={"/"} className="nav-logo">
                  <LazyLoadImage src={pizzaLogo} alt="No Logo ?" />
                  <span>Куда пицца</span>
                </Link>
                <button onClick={orderBtn} className="nav-shopping-btn">
                  <LazyLoadImage src={shoppingBag} alt="No img ?" />
                  <span>{total} ₽</span>
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>
      <Order openOrder={openOrder} setOpenOrder={setOpenOrder} />
    </>
  );
};

export default Header;
