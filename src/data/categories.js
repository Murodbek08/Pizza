import { useContext } from "react";
import { LanguageContext } from "../context";

export function useCategories() {
  const { lang } = useContext(LanguageContext);

  return [
    { name: lang.promotions, image: "/categories/aksiya.svg" },
    { name: lang.pizza, image: "/categories/pizza.svg" },
    { name: lang.combo, image: "/categories/combo.svg" },
    { name: lang.sushi, image: "/categories/sushi.svg" },
    { name: lang.sauces, image: "/categories/sauce.svg" },
    { name: lang.desserts, image: "/categories/desert.svg" },
    { name: lang.drinks, image: "/categories/drink.svg" },
    { name: lang.snacks, image: "/categories/snack.svg" },
  ];
}
