import type { ImageSourcePropType } from "react-native";

import sideImage from "../../assets/images/Acompanhamentos.jpg";
import drinkImage from "../../assets/images/Bebidas.png";
import burgerImage from "../../assets/images/Xburguer.png";

export const categoryIds = [
  "burger",
  "combos",
  "batatas",
  "bebidas",
] as const;

export type CategoryId = (typeof categoryIds)[number];
export type CategoryVariant = "paper" | "dark" | "compact";

export type CategoryType = {
  id: CategoryId;
  label: string;
  eyebrow: string;
  description: string;
  variant: CategoryVariant;
};

export const categories: readonly CategoryType[] = [
  {
    id: "burger",
    label: "Burger",
    eyebrow: "Os protagonistas",
    description: "Receitas feitas para chegar à mesa com presença.",
    variant: "paper",
  },
  {
    id: "combos",
    label: "Combos",
    eyebrow: "A experiência completa",
    description: "Combinações da casa para aproveitar do começo ao fim.",
    variant: "dark",
  },
  {
    id: "batatas",
    label: "Batatas",
    eyebrow: "Pra dividir — ou não",
    description: "Os extras que completam o rolê.",
    variant: "paper",
  },
  {
    id: "bebidas",
    label: "Bebidas",
    eyebrow: "Pra acompanhar",
    description: "Geladas e no ponto para fechar o pedido.",
    variant: "compact",
  },
];

export type ProductType = {
  id: number;
  name: string;
  description: string;
  ingredients: readonly string[];
  price: number;
  image: ImageSourcePropType;
  imageAlt: string;
  category: CategoryId;
  tag?: string;
  featured?: boolean;
};

export const products: ProductType[] = [
  {
    id: 1,
    name: "X-Burger",
    description: "Pão brioche, carne 180g, queijo e molho da casa",
    ingredients: ["Brioche", "Carne 180g", "Queijo", "Molho da casa"],
    price: 29.9,
    image: burgerImage,
    imageAlt: "Hambúrguer artesanal servido em pão brioche",
    category: "burger",
    tag: "Clássico da casa",
    featured: true,
  },
  {
    id: 2,
    name: "X-Bacon",
    description: "Pão brioche, carne 180g, bacon crocante",
    ingredients: ["Brioche", "Carne 180g", "Bacon", "Queijo"],
    price: 34.9,
    image: burgerImage,
    imageAlt: "Hambúrguer com bacon crocante",
    category: "burger",
    tag: "Mais pedido",
  },
  {
    id: 3,
    name: "Batata Frita",
    description: "Porção de batata frita crocante",
    ingredients: ["Batata", "Tempero da casa"],
    price: 15.9,
    image: sideImage,
    imageAlt: "Porção de batatas fritas crocantes",
    category: "batatas",
  },
  {
    id: 4,
    name: "Calafrango",
    description: "Pão brioche, frango 180g, bacon crocante",
    ingredients: ["Brioche", "Frango 180g", "Bacon", "Queijo"],
    price: 24.9,
    image: burgerImage,
    imageAlt: "Sanduíche artesanal de frango com bacon",
    category: "burger",
  },
  {
    id: 5,
    name: "Nuggets",
    description: "Porção de nuggets frita crocante",
    ingredients: ["Frango empanado", "Molho da casa"],
    price: 25.9,
    image: sideImage,
    imageAlt: "Porção de nuggets crocantes",
    category: "batatas",
  },
  {
    id: 6,
    name: "X-Tudo",
    description: "Pão brioche, frango 180g, bacon crocante, calabresa, salada",
    ingredients: ["Brioche", "Frango 180g", "Bacon", "Calabresa", "Salada"],
    price: 24.9,
    image: burgerImage,
    imageAlt: "Sanduíche artesanal completo com frango e calabresa",
    category: "burger",
  },
  {
    id: 7,
    name: "X-Calabresa",
    description: "Pão brioche, calabresa, bacon crocante, queijo",
    ingredients: ["Brioche", "Calabresa", "Bacon", "Queijo"],
    price: 24.9,
    image: burgerImage,
    imageAlt: "Sanduíche artesanal de calabresa com bacon",
    category: "burger",
  },
  {
    id: 8,
    name: "Coca-Cola Lata",
    description: "Coca-Cola lata 350 ml",
    ingredients: ["350 ml"],
    price: 5.9,
    image: drinkImage,
    imageAlt: "Bebida gelada servida com o lanche",
    category: "bebidas",
  },
  {
    id: 9,
    name: "Coca-Cola 1 Litro",
    description: "Coca-Cola 1 litro",
    ingredients: ["1 litro"],
    price: 9.9,
    image: drinkImage,
    imageAlt: "Bebida de um litro servida com o lanche",
    category: "bebidas",
  },
  {
    id: 10,
    name: "Guaraná Lata",
    description: "Guaraná lata 350 ml",
    ingredients: ["350 ml"],
    price: 5.9,
    image: drinkImage,
    imageAlt: "Guaraná gelado em embalagem de 350 ml",
    category: "bebidas",
  },
  {
    id: 11,
    name: "Guaraná 1 Litro",
    description: "Guaraná 1 litro",
    ingredients: ["1 litro"],
    price: 9.9,
    image: drinkImage,
    imageAlt: "Guaraná gelado em embalagem de um litro",
    category: "bebidas",
  },
];
