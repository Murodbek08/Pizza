import LanguageContextProvider from "./context/LanguageContextProvider.jsx";
import CartContextProvider from "./context/CartContextProvider.jsx";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App.jsx";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./index.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </LanguageContextProvider>
  </StrictMode>
);
