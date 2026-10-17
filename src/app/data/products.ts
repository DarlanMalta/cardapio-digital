import type { ImageSourcePropType } from "react-native";

import drinkImage from "../../../assets/images/Bebidas.png";
import burgerImage from "../../../assets/images/Xburguer.png";

export const categories = [
  { id: "hamburgers", label: "Hambúrgueres" },
  { id: "acompanhamentos", label: "Acompanhamentos" },
  { id: "bebidas", label: "Bebidas" },
] as const;

export type CategoryId = (typeof categories)[number]["id"];

export type ProductType = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: ImageSourcePropType;
  category: CategoryId;
};

export const products: ProductType[] = [
  {
    id: 1,
    name: "X-Burger",
    description: "Pão brioche, carne 180g, queijo e molho da casa",
    price: 29.9,
    image: burgerImage,
    category: "hamburgers",
  },
  {
    id: 2,
    name: "X-Bacon",
    description: "Pão brioche, carne 180g, bacon crocante",
    price: 34.9,
    image: burgerImage,
    category: "hamburgers",
  },
  {
    id: 3,
    name: "Batata Frita",
    description: "Porção de batata frita crocante",
    price: 15.9,
    image: burgerImage,
    category: "acompanhamentos",
  },
  {
    id: 4,
    name: "Calafrango",
    description: "Pão brioche, frango 180g, bacon crocante",
    price: 24.9,
    image: burgerImage,
    category: "hamburgers",
  },
  {
    id: 5,
    name: "Nuggets",
    description: "Porção de nuggets frita crocante",
    price: 25.9,
    image: burgerImage,
    category: "acompanhamentos",
  },
  {
    id: 6,
    name: "X-tudo",
    description: "Pão brioche, frango 180g, bacon crocante, calabresa, salada",
    price: 24.9,
    image: burgerImage,
    category: "hamburgers",
  },
  {
    id: 7,
    name: "X-calabresa",
    description: "Pão brioche, calabresa, bacon crocante, queijo",
    price: 24.9,
    image: burgerImage,
    category: "hamburgers",
  },
  {
    id: 8,
    name: "Coca-Cola lata",
    description: "Coca-cola lata 350ml",
    price: 5.9,
    image: drinkImage,
    category: "bebidas",
  },
  {
    id: 9,
    name: "Coca-Cola 1 litro",
    description: "Coca-cola 1000ml",
    price: 9.9,
    image: drinkImage,
    category: "bebidas",
  },

  {
    id: 10,
    name: "Guaraná lata",
    description: "Guaraná lata 350ml",
    price: 5.9,
    image: drinkImage,
    category: "bebidas",
  },
  {
    id: 11,
    name: "Guaraná litro",
    description: "Guaraná lata 1000ml",
    price: 9.9,
    image: drinkImage,
    category: "bebidas",
  },
];
