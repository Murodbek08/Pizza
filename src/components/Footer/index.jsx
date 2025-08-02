import { LanguageContext } from "../../context";
import { Link } from "react-router-dom";
import { useContext } from "react";
import {
  faceBookIcon,
  instagramIcon,
  locationIcon,
  pizzaLogoBig,
  tellIcon,
} from "../../assets";

import "./Footer.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Footer = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <footer>
      <div className="container">
        <div className="footer-contents">
          <div className="footer-logo">
            <Link to={"/"} className="nav-logo">
              <LazyLoadImage src={pizzaLogoBig} alt="No logo ?" />
              <span>Куда пицца</span>
            </Link>
          </div>
          <div className="footer-pizza">
            <h4>{lang?.whereIsPizza}</h4>
            <ul>
              <li>
                <Link>{lang?.aboutThecompany}</Link>
              </li>
              <li>
                <Link>{lang?.userAgreement}</Link>
              </li>
              <li>
                <Link>{lang?.warrantyConditions}</Link>
              </li>
            </ul>
          </div>
          <div className="footer-help">
            <h4>{lang?.help}</h4>
            <ul>
              <li>
                <Link>{lang?.restaurant}</Link>
              </li>
              <li>
                <Link>{lang?.contacts}</Link>
              </li>
              <li>
                <Link>{lang?.support}</Link>
              </li>
              <li>
                <Link>{lang.trackOrder}</Link>
              </li>
            </ul>
          </div>
          <div className="footer-contacts">
            <h4>{lang.contacts}</h4>
            <a href="tel:+7 (926) 223-10-11">
              <LazyLoadImage src={tellIcon} alt="No icon ?" />
              <span>+7 (926) 223-10-11</span>
            </a>
            <a
              href="https://www.google.com/maps?q=Москва,+ул.+Юных+Ленинцев,+д.99"
              target="_blank"
            >
              <LazyLoadImage src={locationIcon} alt="No icon ?" />
              <span>{lang.moscowStYoungLenintsevD99}</span>
            </a>
            <div className="footer-social-media">
              <a href="https://www.facebook.com" target="_blank">
                <LazyLoadImage src={faceBookIcon} alt="No icon ?" />
                <span>Facebok</span>
              </a>
              <a href="https://www.instagram.com" target="_blank">
                <LazyLoadImage src={instagramIcon} alt="No icon ?" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
        <p>{lang.copyright2021WherePizza}</p>
      </div>
    </footer>
  );
};

export default Footer;
