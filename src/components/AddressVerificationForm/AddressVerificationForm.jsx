import { LanguageContext } from "../../context";
import { locationIcon } from "../../assets";
import { useContext } from "react";

import "./AddressVerificationForm.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

const AddressVerificationForm = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <div className="address-verification-form">
      <h4>{lang.text3}</h4>
      <form>
        <div className="input-container">
          <LazyLoadImage src={locationIcon} alt="No icon ?" />
          <input type="text" placeholder={lang.address} />
        </div>
        <button>{lang.check}</button>
      </form>
    </div>
  );
};

export default AddressVerificationForm;
